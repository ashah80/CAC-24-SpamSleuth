import os
import kagglehub
import regex as re 
import tensorflow


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

import os
import kagglehub

# Load model weights
weights_dir = kagglehub.model_download(f'google/gemma-2/pyTorch/gemma-2-{VARIANT}')

# Ensure that the tokenizer is present
tokenizer_path = os.path.join(weights_dir, 'tokenizer.model')
assert os.path.isfile(tokenizer_path), 'Tokenizer not found!'

# Ensure that the checkpoint is present
ckpt_path = os.path.join(weights_dir, f'model.ckpt')
assert os.path.isfile(ckpt_path), 'PyTorch checkpoint not found!'

import sys

sys.path.append('gemma_pytorch')


import contextlib
import os
import torch
from gemma.config import GemmaConfig, get_model_config
from gemma.model import GemmaForCausalLM
from gemma.tokenizer import Tokenizer


# Set up model config.
model_config = get_model_config(CONFIG)
model_config.tokenizer = tokenizer_path
model_config.quant = 'quant' in VARIANT

# Instantiate the model and load the weights.
torch.set_default_dtype(model_config.get_dtype())
device = torch.device(MACHINE_TYPE)
model = GemmaForCausalLM(model_config)
model.load_weights(ckpt_path)
model = model.to(device).eval()

# Generate with one request in chat mode

# Chat templates
USER_CHAT_TEMPLATE = "<start_of_turn>user\n{prompt}<end_of_turn><eos>\n"
MODEL_CHAT_TEMPLATE = "<start_of_turn>model\n{prompt}<end_of_turn><eos>\n"

# Sample formatted prompt
prompt = (
    USER_CHAT_TEMPLATE.format(
        prompt='What is a good place for travel in the US?'
    )
    + MODEL_CHAT_TEMPLATE.format(prompt='California.')
    + USER_CHAT_TEMPLATE.format(prompt='What can I do in California?')
    + '<start_of_turn>model\n'
)
print('Chat prompt:\n', prompt)

# Generate sample
output = model.generate(
    'Why is the following message spam: I want $100 plz',
    device=device,
    output_len=100,
)

print(output)

output = model.generate(
    'Why is the following message spam: I want $500 plz',
    device=device,
    output_len=100,
)

print(output)
