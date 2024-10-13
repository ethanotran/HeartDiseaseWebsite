from flask import Flask, jsonify , request, render_template, redirect,url_for
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)




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
        return jsonify({"Result": "your age is  " + request.json['age']})
        



if __name__ == "__main__":
    app.run(debug = True, port = 8090)