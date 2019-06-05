import os
import urllib.parse
from flask import Flask
from flask import request
from flask import jsonify
from keras import backend
from src.optout.model import Model
from flask_cors import CORS, cross_origin
import sqlite3

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

m = Model()


@app.route("/predict", methods=['POST'])
@cross_origin()
def sentiment_score():
    """Returns the sentiment score of the parsed sentence.

    Returns:
        score (int) : The sentiment score of the sentence. 1 - abusive, 0 - not abusive.
    """
    sentences = request.get_json()['sentences']

    backend.clear_session()

    score = m.predict(sentences, os.getcwd() + "/saved_data/models/model_120.h5",
              "/data/DataTurks/dump.csv", 'content', 10000)

    response = jsonify(score=score)
    # response.headers['Content-Security-Policy'] = "default-src 'self'; script-src 'self' http://localhost:5000 https://localhost:5000 'unsafe-eval'; connect-src *; style-src * 'unsafe-inline' 'self' blob:; img-src 'self' data:; font-src 'self' data:;"
    # response.headers['Access-Control-Allow-Origin'] = "*"
    # response.headers['Access-Control-Allow-Methods'] = "POST"
    return response


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
