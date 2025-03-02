import openai
import os
from dotenv import load_dotenv, find_dotenv
from flask import Flask
from textSpam import return_text_predictions
from emailSpam import return_email_predictions
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv(find_dotenv())
openai.api_key = os.getenv("API_KEY")

def analyze_message_gpt(input_text, message_type="text message or email"):
    prompt = f"""Based on the following information, determine whether the input message is spam or not. If you do decide it is a scam, provide specific reasons as to why you think it is a scam in a way that anyone of any age can understand. If you think it is not a scam, also provide your reasoning. Make sure to be fair in your judgement. The provided information is in the form of {message_type}, and follows: {input_text}. Make sure to display your output in the following format:

    spam (or ham)

    Reasons why this message is spam (or not spam) listed

    Resources to research further and links
    """

    def ask_openai(prompt):
        try:
            response = openai.chat.completions.create(
                model="gpt-3.5-turbo", 
                messages=[
                    {"role": "system", "content": "You are a dedicated analyzer who can catch scams quickly and explain them to customers of any age."}, 
                    {"role": "user", "content": prompt}  
                ],
                temperature=0.7,
                max_tokens=400  
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"Error: {str(e)}"

    return ask_openai(prompt)


app = Flask(__name__)
CORS(app)

@app.route('/api/run_function', methods=['POST'])
def classifyspam():
    message = request.json.get('input_data')  
    if request.json.get('classification_type') == "email":
        isSpam, confidence = return_email_predictions(message)
    else:
        isSpam, confidence = return_text_predictions(message)
    print(f"{isSpam} + {confidence}")
    response = analyze_message_gpt(message, "text message")
    response_lines = response.split('\n')
    gpt_classification = response_lines[0].strip().lower()

    gpt_classification = response.split('\n')[0].strip().lower()
    gpt_details = '\n'.join(response_lines[1:]).strip()
    print(isSpam)
    print(gpt_classification)
    if not (isSpam == gpt_classification):
        isSpam = gpt_classification
    if isSpam == "ham":
        isSpam = "not spam"

    output = "This message has a " + confidence + " chance of being " + isSpam +  "\n" + gpt_details
    return jsonify({"result": output})

if __name__ == '__main__':
    app.run(debug=True)