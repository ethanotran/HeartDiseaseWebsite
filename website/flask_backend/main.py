from flask import Flask, jsonify , request, render_template, redirect,url_for
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

#instructions
# 1. you need to activate virtual env before starting the server. use this command: venv\Scripts\activate (Windows)
# 2. if you get error at using that command in Windows, use this command to change policies in powershell: Set-ExecutionPolicy RemoteSigned -Scope Process
# 3. now that you activate virtual env, use command py main.py to activate server.

#sources:
#setting up dependencies, virtual env and flask server beackend : https://www.youtube.com/watch?v=ctQMqqEo4G8&t=972s
@app.route("/api/values",methods = ['GET'])


def values():
    return jsonify(
        {
            "values" :[ 
                'age',
                'gender',
                'glucose'
            ]
            
        }

    )

@app.route("/api/input",methods = ["POST"])
def input():
        return jsonify({"Result": "your data " + request.form['age'] + 
        request.form['gender']  + request.form['impulseLevel'] + request.form['systolicBlood'] + 
        request.form['diastolicBlood'] + request.form['glucoseLevel'] + request.form['kcmLevel?'] + 
        request.form['troponinLevel?'] + request.form['class'] })
        


if __name__ == "__main__":
    app.run(debug = True, port = 8090)