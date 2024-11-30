import NavBar from "../components/navbar";
import "./info.css"

/*Sources for info:

https://www.who.int/health-topics/cardiovascular-diseases#tab=tab_1

https://www.cdc.gov/heart-disease/about/index.html#:~:text=is%20heart%20disease%3F-,The%20term%20"heart%20disease"%20refers%20to%20several%20types%20of%20heart,can%20cause%20a%20heart%20attack.

https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118

https://www.escardio.org/The-ESC/Press-Office/Press-releases/what-should-i-eat-to-avoid-heart-disease

https://www.cdc.gov/heart-disease/prevention/

https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/heart-disease-stroke#:~:text=Having%20diabetes%20means%20you%20are,heart%20attack%20or%20a%20stroke.

https://www.nhs.uk/conditions/coronary-heart-disease/prevention/
*/ 
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


          <h2 className="titles">Which are the General Symptoms?</h2>
        


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
      </div>
      <div className="statistics">
        <h2> General Statistics</h2>
          <p>Heart disease is the leading cause of death worldwide, accounting for 17.9 million deaths per year, or 32% of all global deaths. Of these deaths: </p>
          <ul>
            <li>Over 75% occur in low and middle-income countries</li>
            <li>85% are due to heart attacks and strokes</li>
          </ul>
          <p>Furthermore, in the United States alone:</p>
          <ul>
            <li>About 1 in 20 adults aged 20 or older have coronary heart disease</li>
            <li>In 2022, heart disease caused 702,880 deaths, or 20% of all deaths</li>
            <li>Between 2019 and 2020, heart disease cost $252.2 billion in healthcare services, medications, and lost productivity.</li>
          </ul>
      </div>
      <div className="feature-impact">
        <h2>How do our model features affect the likelihood of heart disease?</h2>
        <ul>
          <li><strong>Age:</strong> The risk of heart disease is positively correlated with age. In the United States, 11% of people between 20 and 40 have heart disease, 37% between 40 and 60, 71% between 60 and 80, and 85% over 80.</li>
          <li><strong>Sex:</strong> Men generally have higher risk of heart disease than women, though the risk becomes similar post-menopause.</li>
          <li><strong>Chest Pain (Angina):</strong> Predictable chest pain during physical activity or emotional stress indicates that the heart isn't getting enough oxygen-rich blood and is often an early indicator of heart disease.</li>
          <li><strong>Maximum Heart Rate:</strong> Maximum heart rate decreases with age and is approximated by the equation 220 - age for men, and 210 - 0.79 * age for women. A maximum heart rate significantly below the predicted rate can indicate weakness in the heart.</li>
          <li><strong>Resting Heart Rate:</strong> An elevated resting heart rate is associated with the development of metabolic syndrome, which in turn increases the risk of developing heart disease.</li>
          <li><strong>Number of heart vessels colored by fluoroscopy:</strong> A cardiac angiogram is a fluoroscopy that reveals the number and extent of blocked or narrowed coronary arteries. The greater the number of colored vessels, the greater the risk of adverse cardiac events.</li>
          <li><strong>Systolic Blood Pressure:</strong> High top blood pressure is a major risk factor for heart disease. High blood pressure can damage arteries over time, leading to heart attacks, strokes, and other complications.</li>
          <li><strong>Creatine Kinase-MB Level:</strong> CK-MB is an enzyme found in the heart. Elevated levels indicate damage, commonly due to a heart attack.</li>
          <li><strong>Troponin Level:</strong> Troponins are proteins released into the bloodstream when the heart is damaged. High levels are a specific marker for heart attacks.</li>
        </ul>
      </div>
      <div className="sources">
        <h2>Sources</h2>
        <ul>
          <li>https://www.cdc.gov/heart-disease/data-research/facts-stats/index.html</li>
          <li>https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)</li>
          <li>https://pmc.ncbi.nlm.nih.gov/articles/PMC5408511</li>
          <li>https://web.archive.org/web/20120510135600/http://www.world-heart-federation.org/cardiovascular-health/cardiovascular-disease-risk-factors/</li>
          <li>https://web.archive.org/web/20140817123106/http://whqlibdoc.who.int/publications/2011/9789241564373_eng.pdf?ua=1</li>
        </ul>
      </div>
    </div> 
  </div>
  )
}