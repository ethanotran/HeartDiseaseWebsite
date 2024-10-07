from flask import Flask, jsonify 
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins = '*')

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

if __name__ == "__main__":
    app.run(debug = True, port = 8090)