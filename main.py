import openai
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
openai.api_key = os.getenv("API_KEY")

type = "text message"
input = "WINNER!! As a valued network customer you have been selected to receivea 900 prize reward! To claim text WINNER to 87121."

prompt1 = f"""Based on the following information, find out if it is a scam or not. If you do decide it is a scam, provide specific reasons as to why you think
it is a scam in a way that anyone of any age can understand. The provided information is in the form {type}, and follows: {input}
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
            max_tokens = 400  
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"

response = ask_openai(prompt1)
print(response)