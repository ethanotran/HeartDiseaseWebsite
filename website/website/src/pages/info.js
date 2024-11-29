import NavBar from "../components/navbar";
import "./info.css"

export default function Info() {
  return(
    <div>
      <NavBar/>
      <div className="page-header">
        <h1>Heart Diseases, General Info and Prevention</h1>
  
        </ div>
        <div className="body-color">
     < div className = "body-text">
      
      <h2 className="titles" >What is Heart Disease? 
      </h2>
    
        <p>Heart disease in general refers to multiple conditions that affect the heart. 
          For example, the most common type of heart disease in the US is Coronary Heart Disease, 
          a condition where the heart’s arteries become narrow or clogged, reducing blood flow to the heart. 
          Heart diseases belong to the greater family of Cardiovascular Diseases (CVDs): disorders which primarily affect the heart and its blood vessels. 
          CVDs take the lives of more than 17 million people around the world each year.</p>
    

          <h2 className="titles">Which are the General Symptoms ?</h2>
        
        <p>Symptoms vary depending on the heart disease. 
          However, the most common symptoms generally include chest pain, shortness in breath, pain in arms/shoulders, weakness and fatigue. 
          Some conditions, like arrhythmia (irregular heart beats) can cause symptoms such as dizziness, elevated/slow heartbeats, lightheadedness, and some form of chest pain or discomfort. 
          It is important to identify the symptoms fast so action can be taken.</p>


          <h2 className="titles">How to Prevent Heart Disease? </h2>

        <p>Having a healthy lifestyle is a good way of preventing any kind of heart disease from developing. Good diet, exercise and good sleep, in general are a good start in preventing 
          conditions for heart disease. However, it is worth noting there are genetic factors in heart disease as well, such as a naturally high blood pressure or cholesterol. In cases like these,
          it is even more crucial to be maintain a healthy lifestyle.
        </p>
     
      

          <h2 className="titles">Healthy Diet</h2>
 
        <p>Having a good balance between your meals contributes to preventing a healthy lifestyle and keeping your heart healthy. </p>
        <p>High saturated and trans fats are a major contributor in the development of heart disease. Therefor, it is good to reduce consumption of these foods. 
          This does not mean that all fats are bad; some dairy based foods and non-tropical fats like olive oil, avocados or oily fish in moderation do not increase the risk of heart diseases. 
          Also, some consumption of aged or fermented dairy products like yogurt and cheese are beneficial for gut health. In the case of proteins, red meats have been associted with an increased risk of cardiovascular disease. Poultry, in contrast does not increase the risk for heart disease, especially in moderate consumption. 
          Finally, keeping a constant consumption of fruits and vegetables is good for a balanced diet and its relation with low risk for heart diseases. 
        </p>
        <p>Consumption of salt and other high in sodium foods has been associated with increases in blood pressure. Therefore, reducing salt consumption can be beneficial for health. 
          In the case of sugar, keeping its consumption low will help prevent or control diabetes which is related to heart diseases. 
          This also includes the consumption of soft drinks which  intake should also be kept low. Drinks such as tea and coffee can be consumed regularly if sugar is not on them. Of course keeping a constant consumption of water is important. 
          Alcoholic drinks should be kept in moderation due to its relation with increase of blood pressure.
        </p>
        <p>Foods high in fiber are good for preventing the increase of cholesterol build up. 
          Foods like cereals that have high glycaemic index (GI) should be reduced due to its relation with increasing levels of sugar. 
           Also, whole grain foods and low glycaemic index (GI), like rice, pasta or tortillas, can be consumed on a more regular basis. 
        </p>

          <h2 className="titles" >Healthy Lifestyle</h2>

        <p>Regular exercise is recommended to keep healthy. It is recommended to do at least 2:30 hours of constant exercise every week, or 30 min per day. 
          This will help prevent the development of any heart condition by keeping your weight, blood sugar levels and blood pressure in check. 
          Keeping your weight in check is important because being overweight leads to stress on your heart and blood vessels, which can develop conditions for heart disease.
        </p>
        <p>Avoid the consumption of cigarettes because these ones are related with the development of heart diseases.
           Also, keeping a good sleep schedule is recommended not just to prevent heart conditions, but other illnesses.
            Between 7 to 9 hours is recommended for adults to keep a healthy sleeping schedule. If possible try to reduce mental stress. 
            Any mental practice is recommended to doing so. 
        </p>
        <p>Remember to always check your health with a specialized health team.
           It is important to be aware of your health and check on your medication even more if your conditions have a relation with heart disease. For example,
            diabetes is a factor that increases the risk of heart disease so it is important to keep your diabetes medication in check and have regular check-ups with a physician. 
        </p>
        </div>
        </div>

    </div>
  )
}