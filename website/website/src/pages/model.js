import NavBar from "../components/navbar";


export default function Model() {
  return(
    <body className="page1">
      <NavBar/>
      <h1 className="header-box-info">Model Info</h1>
      <p className="information" >Approach</p>
      <p1 className="information">To develop our machine learning models, we took two datasets and performed basic cleaning tasks like checking for blank or missing values or removing duplicate ones. We also generated visualizations of the data using a heatmap to determine which variables were most correlated to incidence of heart disease, as well as a box plot to see how the data is distributed. We then generated models from the dataset, using 15% of the data for the testing and the remaining 85% for training the model. After outputting the accuracy scores for the models, we implemented them into the backend and generated a voting classifier to take the combined results of the best performing models. In doing so, we would ensure robust prediction, regardless of complexity or distribution of the data.</p1>
      <h2 className = "header-box-info"> Models Used</h2>
      <ol className = "information">
        <li>Random Forest </li>
            <ul>Random forest models are one of the most widely used machine learning models and are made up of an ensemble of decision trees. To start, a random sample of data is taken and a series of decision trees are generated on that subset. One of the benefits of random forest models is that it can help to reduce overfitting and bias.</ul>
        <li>AdaBoost</li>
            <ul>The AdaBoost (short for Adaptive Boosting) model combines many weak classifiers into one strong classifier. This differs from random forest models in that random forest generates full decision trees, whereas AdaBoost generates stumps (a node with two leaves). In addition, AdaBoost also adds weights to the stumps that are more prone to errors, hence the name AdaBoost.</ul>
        <li>Gradient Boost</li>
            <ul>Gradient boosting models combine a group of weak models into one model that is much more accurate and efficient. Like random forest models they consist of a group of decision trees, but whereas random forest models generate decision trees in parallel, gradient boosting creates decision trees sequentially, which allows them to improve upon the errors of the previous ones.</ul>
        <li>K-Nearest Neighbors</li>
            <ul>K-nearest neighbors is a supervised learning model used in both regression and classification problems. It makes predictions on the data points based on their similarity to one another. The versatility of k-nearest neighbors is due to the fact that it can handle both numerical and categorical data, and makes no assumptions about how the data is distributed</ul>
        <li>Decision Tree</li>
            <ul>Decision Tree models employ supervised learning, where input data is taken and models are created to predict outcomes based off of it. It is a much simpler model than others like random forest and gradient boosting, since it only uses one tree to make a prediction</ul>
        <li>Logistic Regression</li>
            <ul>Logistic regression is a supervised machine learning model used in binary classification problems, where a sigmoid function takes the independent variables from the dataset and produces a probability between zero and one for the dependent variables.</ul>
      </ol>
    </body>
  )
}