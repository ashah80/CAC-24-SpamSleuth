from flask import Flask
# from flask_cors import CORS

app = Flask(__name__)
# cors = CORS(app, origins='*')

@app.route("/members")

def members():
    # return jsonify({"members": ["Member1", "Member2", "Member3"]})
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)