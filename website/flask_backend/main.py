from flask import Flask, jsonify , request, render_template, redirect,url_for
from flask_cors import CORS

import numpy as np

import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
from sklearn.model_selection import train_test_split

# ML Models/Regression
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import VotingClassifier


# Track training timing/completion
from tqdm import tqdm

# Path resolution
from pathlib import Path

import json

app = Flask(__name__)
cors = CORS(app)




@app.route("/api/values",methods = ['GET'])
def values():
    # example values for heart.csv models. Go to the site for a copy
    # paste version of below to use with postman
    #
    # Example with random data
    # return jsonify(
    #     {
    #         "age": "35",
    #         "sex": "1",  # 0 or 1
    #         "cp": "1",  # 0, 1, 2, or 3
    #         "trtbps": "140",
    #         "chol": "210",
    #         "fbs": "1",  # 0 or 1
    #         "restecg": "0",  # 0, 1, or 2
    #         "thalachh": "134",
    #         "exng": "0",  # 0 or 1
    #         "caa": "0",  # 0, 1, 2, 3, or 4
    #     }

        # Example below with actual data from heart.csv where original label is 1
        # (positive for heart disease)

    # return jsonify(
    #     {
    #         "age": "52",
    #         "gender": "1",  # 0 or 1
    #         "impulse": "76",  
    #         "pressurehight": "109",
    #         "pressurelow": "85",
    #         "glucose": "227",  
    #         "kcm": "0.665",  
    #         "troponin": "0.491",
    #         "class": "1",  # 0 or 1
    #
    #     }

        # Example below where original label is 0
    return jsonify(
        {
            "age": "69",
            "gender": "1",  # 0 or 1
            "impulse": "77",  # 0, 1, 2, or 3
            "pressurehight": "130",
            "pressurelow": "87",
            "kcm": "0.44",  # 0 or 1
            "troponin": "0.52",
        }
    )

@app.route("/api/input",methods = ["POST"])
def input():
        json_dict = request.get_json()
        #convert string values to ints
        for key in json_dict:
            json_dict[key] = int(json_dict[key])

        input = np.array(list(json_dict.values()))
        input = input.reshape(1, -1)

        prediction = models["Ensemble"].predict(input)
        if prediction == 0:
            return jsonify("Result: you may have elevated risk of heart disease.")
        else:
            return jsonify("Result: our model does not detect an elevated risk of heart disease.")

def trainModels():
    root_dir = Path(__file__).resolve().parent.parent.parent
    filename = root_dir / "Heart Attack.csv"
    df1 = pd.read_csv(filename)



    # columns: age, sex, cp, trtbps, chol, fbs, restecg, thalachh, exng, caa

    # remove duplicate values
    df1 = df1.drop_duplicates()
    df1['heart_attack'] = df1['class'].map({'negative': 0, 'positive': 1})
    df1 = df1.drop("class",axis=1)
    df1

    #Drop noise (based on extra code/analysis in Kaggle
    index = df1.loc[df1['chol'] > 500].index
    df1.drop(index=index, inplace=True)

    labels_1 = df1["output"]
    df1.pop("output")
    models = {}

    for i in tqdm([RandomForestClassifier, DecisionTreeClassifier, GradientBoostingClassifier, AdaBoostClassifier]):
        X_train_1, X_test_1, y_train_1, y_test_1 = train_test_split(df1, labels_1, test_size=0.2)
        # scale the data with Z score normalization
        scale = StandardScaler()
        scale.fit(X_train_1)
        X_train_1 = scale.fit_transform(X_train_1)
        X_test_1 = scale.transform(X_test_1)

    ensemble_model = VotingClassifier(estimators=[('rf', models['RandomForestClassifier']),('dt', models['DecisionTreeClassifier,']),
    ('gb', models['GradientBoostingClassifier']), ('ab', models['AdaBoostClassifier'])])
    ensemble_model = ensemble_model.fit(X_train_1, y_train_1)
    models['Ensemble'] = ensemble_model
    return models

    # You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All"
    # You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session
        



if __name__ == "__main__":
    models = trainModels()
    app.run(debug = True, port = 8090)