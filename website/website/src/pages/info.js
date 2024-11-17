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
          <h2>Which are the general symptoms ?</h2>
          <div className="symptoms-body">
        <p>Symptoms vary depending on the heart disease. 
          However, the most common symptoms generally include chest pain, shortness in breath, pain in arms/shoulders, weakness and fatigue. 
          Some conditions, like arrhythmia (irregular heart beats) can cause symptoms such as dizziness, elevated/slow heartbeats, lightheadedness, and some form of chest pain or discomfort. 
          It is important to identify the symptoms fast so action can be taken.</p>
      </div>
          </div>  
      
    </div>
  )
}