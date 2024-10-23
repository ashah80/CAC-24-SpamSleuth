import os
import kagglehub
import regex as re 
import torch
import tensorflow as tf
from torch.cuda.amp import autocast
import sys
sys.path.append('gemma_pytorch')
from gemma.config import GemmaConfig, get_model_config
from gemma.model import GemmaForCausalLM
from gemma.tokenizer import Tokenizer

from flask import Flask
from flask_cors import CORS



# Get Kaggle credentials from environment
kaggle_username = os.getenv("KAGGLE_USERNAME")
kaggle_key = os.getenv("KAGGLE_KEY")

os.environ['KAGGLE_USERNAME'] = kaggle_username
os.environ['KAGGLE_KEY'] = kaggle_key

# Choose variant and machine type
VARIANT = '2b-it'
MACHINE_TYPE = 'cpu'

CONFIG = VARIANT[:2]
if CONFIG == '2b':
    CONFIG = '2b-v2'

# Download model weights using Kaggle API
weights_dir = kagglehub.model_download(f'google/gemma-2/pyTorch/gemma-2-{VARIANT}')

# Ensure that the tokenizer and checkpoint are present
tokenizer_path = os.path.join(weights_dir, 'tokenizer.model')
assert os.path.isfile(tokenizer_path), 'Tokenizer not found!'

ckpt_path = os.path.join(weights_dir, f'model.ckpt')
assert os.path.isfile(ckpt_path), 'PyTorch checkpoint not found!'

# Add the required model directory to the Python path
sys.path.append('gemma_pytorch')

# Set up model configuration
model_config = get_model_config(CONFIG)
model_config.tokenizer = tokenizer_path
model_config.quant = 'quant' in VARIANT  # Check for quantization support

# Enable mixed precision for performance boost
torch.set_default_dtype(model_config.get_dtype())
device = torch.device(MACHINE_TYPE)

# Instantiate the model and load the weights
model = GemmaForCausalLM(model_config)

# Load the model using mixed precision with autocast
with autocast():
    model.load_weights(ckpt_path)
    model = model.to(device).eval()

# Function to generate text from the model
def generate_response(prompt):
    print(f"Input prompt: {prompt}")
    
    # Template to format the prompt for the model
    USER_CHAT_TEMPLATE = "<start_of_turn>user\n{prompt}<end_of_turn><eos>\n"
    MODEL_CHAT_TEMPLATE = "<start_of_turn>model\n{prompt}<end_of_turn><eos>\n"
    
    # Prepare the chat prompt
    formatted_prompt = (
        USER_CHAT_TEMPLATE.format(prompt=prompt) +
        '<start_of_turn>model\n'
    )
    output = "This is scammy. " + prompt
    # Generate model response
    # with torch.no_grad():  # Disable gradient calculations for efficiency
    #     output = model.generate(formatted_prompt, device=device, output_len=100)
    
    # Print and return the model's output
    print(f"Model output: {output}")
    return output

# Example usage of the function
# output1 = generate_response('Why is the following message spam: I want $100 plz')
# output2 = generate_response('Why is the following message spam: I want $500 plz')


output1 = "This is definitely a scam! Here are the reasons: \n 1. It is scammy \n 2. It is like aarav \n 3. It asks for a gazillion bucks"

# app = Flask(__name__)
# cors = CORS(app, origins='*')

# @app.route("/members")

# def members():
#     # return jsonify({"members": ["Member1", "Member2", "Member3"]})
#     return {"members": ["Member1","Member2", output1]}

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# A sample Python function you want to run
def example_function(data):
    return f"Received data: {data}"

# Define an API route that React can call
@app.route('/api/run_function', methods=['POST'])
def run_function():
    data = request.json.get('input_data')
    result = generate_response(data)
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
