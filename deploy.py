import os
import urllib.parse
from flask import Flask
from flask import request
from flask import jsonify
from keras import backend
from src.optout.model import Model
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

m = Model()


@app.route("/predict", methods=['POST'])
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
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(ssl_context=('cert.pem', 'key.pem'))
