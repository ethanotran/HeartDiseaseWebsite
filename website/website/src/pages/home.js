import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react'
import axios from "axios"
import "./home.css"

export default function Home() {
  const buttonNav = useNavigate();

  
  
  return(
    <div>
      <NavBar/>
      <div className="header-box">
      <div className="title">
        <h1>
          Not sure about your heart health?
        </h1>
        <h1>
          Welcome to Mediks
        </h1>
        </div>
        
        <div className='body'>
          <p>with our machine learning model, you take a survey and it will predict if you are likely to develop a heart disease. You can also find important information about heart health and diseases.</p>
        </div>
        <button className='quiz-button-main' onClick={()=> buttonNav("/quizentry")}>Begin Quiz</button>
      </div>
      
      <div  className='heart-disease'>
        <h2>
          WHAT IS A HEART DISEASE?
        </h2>
        <div className="bodytext">
          
            <p>
            A heart disease is any kind of disease that affects the health of the heart. the most common heart disease in the US is the coronary Artery Disease or CAD which affects 1 of every 20 adults of age 20 or older. 
            </p>
          
          <button className='more' onClick = {()=> buttonNav("/info")}>more</button>
        </div>
        
        <img src="https://th.bing.com/th/id/R.b0c7414c4e28d7eb495bb862857da91a?rik=9HY52Vr57VXlxw&pid=ImgRaw&r=0" alt="From apollosugar.com" width="800px" height ="500px"></img>
      </div>
      

      <div  className='statistics'>
        <img src="https://assets.cdn.thewebconsole.com/ZWEB8327/images/5a723d5c93c90.jpg?m=c1e65a48bd99d67047ea4ac22b5b16a3" alt="From livewellhc.ca" width="800px" height ="500px"></img>
       
       
        <div className="bodytext">
        <h2>Heart Disease Statistics</h2>
        <p>Around 800,000 Americans suffer from a heart attack each year. worldwide more than 17 million people die from a cardiovascular disease each year. </p>
        </div>

        <button className="more" onClick = {()=> buttonNav("/info")}>more</button>
      </div>
      

      <div  className='model'>
        <h2>Our Model</h2>
        <div>
          <div className="bodytext"><p>Information about our model</p></div>
          <button button className='more'onClick = {()=> buttonNav("/model")}>more</button>
        </div>
        <img src="https://cdn.arstechnica.net/wp-content/uploads/2020/10/bci.jpg" alt="" width="800px" height ="600px"></img>
      </div>
      
    
    </div>
  )
}