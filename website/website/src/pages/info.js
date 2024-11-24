import NavBar from "../components/navbar";
import "./info.css"

export default function Info() {
  return(
    <div>
      <NavBar/>
      <div className="header-box-info">
      <h1>What is Heart Disease? 
      </h1>
      <div className="generalInfo">
        <p>Heart disease in general refers to multiple conditions that affect the heart. 
          For example, the most common type of heart disease in the US is Coronary Heart Disease, 
          a condition where the heart’s arteries become narrow or clogged, reducing blood flow to the heart. 
          Heart diseases belong to the greater family of Cardiovascular Diseases (CVDs): disorders which primarily affect the heart and its blood vessels. 
          CVDs take the lives of more than 17 million people around the world each year.</p>
      </div>
        </div>
        <div className="symptoms-header">
          <h2>What are the symptoms?</h2>
          <div className="symptoms-body">
        <p>Symptoms vary depending on the heart disease. 
          However, the most common symptoms generally include chest pain, shortness in breath, pain in arms/shoulders, weakness and fatigue. 
          Some conditions, like arrhythmia (irregular heart beats) can cause symptoms such as dizziness, elevated/slow heartbeats, lightheadedness, and some form of chest pain or discomfort. 
          It is important to identify the symptoms fast so action can be taken.</p>
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