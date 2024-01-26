#!/usr/bin/env python
import os

from flask import Flask
from pymongo import MongoClient
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv()

client = MongoClient(os.getenv("MONGO_CLIENT_LOCATION_DEV"))

@app.route('/')
def home():
    return "Welcome Home!\n"


@app.route('/hello')
def hello():
    return "Hello!\n"


@app.route('/clientHealth')
def fun():
    try:
        print(client.list_database_names())
    except:
        return "Server not available"
    return "Connection to Mongo successful!\n"


if __name__ == "__main__":
    app.run(debug=True)
