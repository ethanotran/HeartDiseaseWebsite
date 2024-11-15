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

#sources:
#setting up dependencies, virtual env and flask server beackend : https://www.youtube.com/watch?v=ctQMqqEo4G8&t=972s
@app.route("/api/values",methods = ['GET'])
def values():
  
    # example values for heart.csv models. Go to the site for a copy
    # paste version of below to use with postman

    # Example below with actual data from heart.csv where original label is 1
    # (positive for heart disease)

    # return jsonify(
    #     {
    #         "age": "63",
    #         "sex": "1",  # 0 or 1
    #         "cp": "3",  # 0, 1, 2, or 3
    #         "thalachh": "150",
    #         "exng": "0",  # 0 or 1
    #         "caa": "0",  # 0, 1, 2, 3, or 4
    #         "impulse": "76",  
    #         "pressurehight": "109",
    #         "kcm": "0.665",  
    #         "troponin": "0.491",
    #
    #     }

        # Example below where original label is 0
    return jsonify(
        {
            "age": "67",
            "sex": "1",  # 0 or 1
            "cp": "0",  # 0, 1, 2, or 3
            "thalachh": "108",
            "exng": "1",  # 0 or 1
            "caa": "3",  # 0, 1, 2, 3, or 4
            "impulse": "77",  # 0, 1, 2, or 3
            "pressurehight": "130",
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
            return jsonify("Result: our ensemble model does not detect an elevated risk of heart disease.")
        elif prediction == 1:
            return jsonify("Result: our ensemble model detects an elevated risk of heart disease.")

def trainModels():
    root_dir = Path(__file__).resolve().parent.parent.parent
    filename = root_dir / "Heart Attack.csv"
    df1 = pd.read_csv(filename)
    filename = root_dir / "heart.csv"
    df2 = pd.read_csv(filename)

    # Drop unimportant columns
    
    df1['heart_attack'] = df1['class'].map({'negative': 0, 'positive': 1})
    df1 = df1.drop("class",axis=1)
    
    df1 = df1.drop(columns=['pressurelow', 'glucose'])
    df2 = df2.drop(columns=['oldpeak', 'slp', 'thall', 'trtbps', 'chol','fbs', 'restecg'])

    # remove duplicate values
    df1 = df1.drop_duplicates()
    df2 = df2.drop_duplicates()
    
    # Extract labels
    labels_1 = df1["heart_attack"]
    df1.pop("heart_attack")
    models1 = {}
    
    labels_2 = df2["output"]
    df2.pop("output")
    models2 = {}
    
    ensembles = {}
    
    # train models for pipeline 1
    for i in tqdm([RandomForestClassifier, DecisionTreeClassifier, GradientBoostingClassifier, AdaBoostClassifier]):
        X_train_1, X_test_1, y_train_1, y_test_1 = train_test_split(df1, labels_1, test_size=0.2)
        # scale the data with Z score normalization
        scale = StandardScaler()
        scale.fit(X_train_1)
        X_train_1 = scale.fit_transform(X_train_1)
        X_test_1 = scale.transform(X_test_1)
        model = i()
        model.fit(X_train_1, y_train_1)
        models1[i.__name__] = model
        
    ensemble_model1 = VotingClassifier(estimators=[('rf', models1['RandomForestClassifier']),('dt', models1['DecisionTreeClassifier,']),
    ('gb', models1['GradientBoostingClassifier']), ('ab', models1['AdaBoostClassifier'])])
    X_train_1, X_test_1, y_train_1, y_test_1 = train_test_split(df1, labels_1, test_size=0.2)
    ensemble_model1 = ensemble_model1.fit(X_train_1, y_train_1)
    
    ensembles['Ensemble 1'] = ensemble_model1  
        
    # train models for pipeline 2
    for i in tqdm([RandomForestClassifier, KNeighborsClassifier, GradientBoostingClassifier, LogisticRegressionCV,
                   LinearSVC]):
        X_train_1, X_test_1, y_train_1, y_test_1 = train_test_split(df2, labels_2, test_size=0.15)
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
        models2[i.__name__] = model

    ensemble_model2 = VotingClassifier(estimators=[('rf', models2['RandomForestClassifier']),('kn', models2['KNeighborsClassifier']),
    ('gb', models2['GradientBoostingClassifier']), ('lrsv', models2['LogisticRegressionCV']), ('lsvc', models2['LinearSVC'])])
    X_train_1, X_test_1, y_train_1, y_test_1 = train_test_split(df2, labels_2, test_size=0.15)
    ensemble_model2 = ensemble_model2.fit(X_train_1, y_train_1)
    
    ensembles['Ensemble 2'] = ensemble_model2
    
    return ensembles


@app.route("/api/example", methods=['POST'])
def example():
    return jsonify({"Result": "your data " + request.form['age'] +
    request.form['gender']  + request.form['impulseLevel'] + request.form['systolicBlood'] +
    request.form['diastolicBlood'] + request.form['glucoseLevel'] + request.form['kcmLevel?'] +
    request.form['troponinLevel?'] + request.form['class'] })



if __name__ == "__main__":
    models = trainModels()
    app.run(debug = True, port = 8090)