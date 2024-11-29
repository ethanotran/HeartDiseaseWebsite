import NavBar from "../components/navbar";
import "./model.css"


export default function Model() {
  return(
    <div>
      <NavBar/>
      <h1 className="page-header2">Model Info</h1>
       
      <h1 className="titles2"><b>Approach</b></h1>
      <p className="body">To develop our machine learning models, we took two datasets and performed basic cleaning tasks h2ke checking for blank or missing values or removing duph2cate ones. We also generated visualizations of the data using a heatmap to determine which variables were most correlated to incidence of heart disease, as well as a box plot to see how the data is distributed. We then generated models from the dataset, using 15% of the data for the testing and the remaining 85% for training the model. After outputting the accuracy scores for the models, we implemented them into the backend and generated a voting classifier to take the combined results of the best performing models. In doing so, we would ensure robust prediction, regardless of complexity or distribution of the data.</p>
      
      <div className="body">
        <figure>
          <img src = "../components/MLpipelines.png" width= "500" height = "500"></img>
          <figcaption> Diagram of our machine learning pipelines</figcaption>
        </figure>
        <figure className="pipeline">
          <img src = "../components/pipeline1.png" width = "500" height = "500"></img>
          <figcaption>Accuracy scores of our first pipeline</figcaption>
        </figure>
        <figure className="pipeline">
          <img src = "../components/pipeline2.png" width = "500" height = "500"></img>
          <figcaption>Accuracy scores of our second pipeline</figcaption>
        </figure>
      </div>
    
      <h2 className = "titles2"><b>Models Used:</b></h2>
      <div className = "information2">
        <h2 className="titles"><u>Random Forest </u> </h2>
            <p>Random forest models are one of the most widely used machine learning models and are made up of an ensemble of decision trees. To start, a random sample of data is taken and a series of decision trees are generated on that subset. One of the benefits of random forest models is that it can help to reduce overfitting and bias.</p>
        <h2 className="titles"><u>AdaBoost</u></h2>
            <p>The AdaBoost (short for Adaptive Boosting) model combines many weak classifiers into one strong classifier. This differs from random forest models in that random forest generates full decision trees, whereas AdaBoost generates stumps (a node with two leaves). In addition, AdaBoost also adds weights to the stumps that are more prone to errors, hence the name AdaBoost.</p>
        <h2 className="titles"><u>Gradient Boost</u></h2>
            <p>Gradient boosting models combine a group of weak models into one model that is much more accurate and efficient. Like random forest models they consist of a group of decision trees, but whereas random forest models generate decision trees in parallel, gradient boosting creates decision trees sequentially, which allows them to improve upon the errors of the previous ones.</p>
        <h2 className="titles"><u>K-Nearest Neighbors</u></h2>
            <p>K-nearest neighbors is a supervised learning model used in both regression and classification problems. It makes predictions on the data points based on their similarity to one another. The versatility of k-nearest neighbors is due to the fact that it can handle both numerical and categorical data, and makes no assumptions about how the data is distributed.</p>
        <h2 className="titles"><u>Decision Tree</u></h2>
            <p>Decision Tree models employ supervised learning, where input data is taken and models are created to predict outcomes based off of it. It is a much simpler model compared to others like random forest and gradient boosting, since it only uses one tree to make a prediction.</p>
        <h2 className="titles"><u>Logistic Regression</u></h2>
            <p>Logistic regression is a supervised machine learning model used in binary classification problems, where a sigmoid function takes the independent variables from the dataset and produces a probability between zero and one for the dependent variables.</p>
      </div>

      <h2 className = "titles2"><b><u>Datasets Used For the Pipelines:</u></b></h2>
      <div className="information1">
        <ol>
          <li><a href = "https://www.kaggle.com/datasets/rashikrahmanpritom/heart-attack-analysis-prediction-dataset">Heart Attack Analysis and Prediction Dataset</a></li>
          <li><a href = "https://www.kaggle.com/datasets/bharath011/heart-disease-classification-dataset">Heart Disease Classification Dataset</a></li>
        </ol>
      </div>

    
    </div>
  )
}