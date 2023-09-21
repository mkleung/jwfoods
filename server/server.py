from flask import Flask, request, jsonify, redirect, render_template, session, abort, url_for


app = Flask(__name__)


# Homepage
@app.route('/', methods=['GET'])
def homepage():
    return render_template('index.html')



if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)