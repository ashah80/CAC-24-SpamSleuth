import openai
import os
from dotenv import load_dotenv, find_dotenv
from flask import Flask
from textSpam import return_text_predictions
from emailSpam import return_email_predictions

load_dotenv(find_dotenv())
openai.api_key = os.getenv("API_KEY")

def analyze_message_gpt(input_text, message_type="text message or email"):
    prompt = f"""Based on the following information, find out if it is a scam or not. If you do decide it is a scam, provide specific reasons as to why you think
    it is a scam in a way that anyone of any age can understand. The provided information is in the form of {message_type}, and follows: {input_text}. Make sure to display your output in the following format:

    spam (or ham)

    Reasons why this message is spam (or ham) listed

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

# Example usage:
message = "Congrats! You've been selected for a free vacation to the Bahamas! 🏖 Just click the link to claim your prize: [bit.ly/faketext123] Hurry, offer expires soon! Terms apply. Reply STOP to unsubscribe."
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
print(output)


    

# isSpam, confidence = return_spam_predictions("please work")
# print(f"{isSpam} + {confidence}")
# isSpam, confidence = predict("hello world")
# print(f"{isSpam} + {confidence}")

# print(response)

# app = Flask(__name__)
# @app.route("/members")
# def members():
#     return {"members": ["Member1", "Member2", "Member3"]}

# if __name__ == "__main__":
#     app.run(debug=True)

# def printHello():
#     print("HELLO")

# printHello()