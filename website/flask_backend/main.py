from flask import Flask, jsonify , request, render_template, redirect,url_for
from flask_cors import CORS

import numpy as np

import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
from sklearn.model_selection import train_test_split

# ML Models/Regression
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegressionCV
from sklearn.svm import LinearSVC

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
    #         "age": "63",
    #         "sex": "1",  # 0 or 1
    #         "cp": "3",  # 0, 1, 2, or 3
    #         "trtbps": "145",
    #         "chol": "233",
    #         "fbs": "1",  # 0 or 1
    #         "restecg": "0",  # 0, 1, or 2
    #         "thalachh": "150",
    #         "exng": "0",  # 0 or 1
    #         "caa": "0",  # 0, 1, 2, 3, or 4
    #     }

        # Example below where original label is 0
    return jsonify(
        {
            "age": "67",
            "sex": "1",  # 0 or 1
            "cp": "0",  # 0, 1, 2, or 3
            "trtbps": "160",
            "chol": "286",
            "fbs": "0",  # 0 or 1
            "restecg": "0",  # 0, 1, or 2
            "thalachh": "108",
            "exng": "1",  # 0 or 1
            "caa": "3",  # 0, 1, 2, 3, or 4
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
    filename = root_dir / "heart.csv"
    df1 = pd.read_csv(filename)

    # Dropping ambiguous columns not properly defined in dataset description
    df1 = df1.drop(columns=['oldpeak', 'slp', 'thall'])
    df1

    # columns: age, sex, cp, trtbps, chol, fbs, restecg, thalachh, exng, caa

    # remove duplicate values
    df1 = df1.drop_duplicates()

    #Drop noise (based on extra code/analysis in Kaggle
    index = df1.loc[df1['chol'] > 500].index
    df1.drop(index=index, inplace=True)

    labels_1 = df1["output"]
    df1.pop("output")
    models = {}

    for i in tqdm([RandomForestClassifier, KNeighborsClassifier, GradientBoostingClassifier, LogisticRegressionCV,
                   LinearSVC]):
        X_train_1, X_test_1, y_train_1, y_test_1 = train_test_split(df1, labels_1, test_size=0.15)
        # scale the data with Z score normalization
        scale = StandardScaler()
        scale.fit(X_train_1)
        X_train_1 = scale.fit_transform(X_train_1)
        X_test_1 = scale.transform(X_test_1)

        if i == LogisticRegressionCV:
            model = i(penalty='elasticnet', l1_ratios=[0.1, 0.5, 0.9], solver='saga', max_iter=1000)
            # max_iter has to be increased just for the model to converge
        else:
            model = i()
        model.fit(X_train_1, y_train_1)
        models[i.__name__] = model

    ensemble_model = VotingClassifier(estimators=[('rf', models['RandomForestClassifier']),('kn', models['KNeighborsClassifier']),
    ('gb', models['GradientBoostingClassifier']), ('lrsv', models['LogisticRegressionCV']), ('lsvc', models['LinearSVC'])])
    ensemble_model = ensemble_model.fit(X_train_1, y_train_1)
    models['Ensemble'] = ensemble_model
    return models

    # You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All"
    # You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session
        



if __name__ == "__main__":
    models = trainModels()
    app.run(debug = True, port = 8090)