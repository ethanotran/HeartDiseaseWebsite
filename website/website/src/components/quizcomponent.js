import React, { useRef, useState } from "react";
import './quizcomponent.css'
import { data } from "./questionlist";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useEffect } from 'react';


// Code inspired by tutorial from GreatStack Youtube Channel, https://www.youtube.com/watch?v=VMZ7lcSdVnY

// const fetchAPI = async () =>{
//   const response = await axios.get("http://localhost:8090/api/values");
//   console.log(response.data.values);
// };
// useEffect(() =>{
//   fetchAPI()
// },[])

const QuizComponent = () => {

  let [index, setIndex] = useState(0)
  let [lock, setLock] = useState(false)
  let [question, setQuestion] = useState(data[index])
  let [finish, setFinish] = useState(false)
  let [answers, setAnswers] = useState([])
  let bar = document.getElementById("bar")

 
  const validateResponse = () => {
     
    if (document.getElementById("answer").value === "") {
      alert("No repsonse was recorded")
    }

    if (typeof document.getElementById("answer").value === "string") {
      if (document.getElementById("answer").value === "male" || document.getElementById("answer").value === "positive") {
        document.getElementById("answer").value = 1
      } else if (document.getElementById("answer").value === "female" || document.getElementById("answer").value === "negative") {
        document.getElementById("answer").value = 0
      }
    }

    if (document.getElementById("answer").value <= data[index].upper && document.getElementById("answer").value >= data[index].lower) {
      addNewAnswer(document.getElementById("answer").value)
      setLock(true)
      nextQuestion()
    } else {
      alert("Invalid response: Answer cannot be recognized by model")
    }
  }

  const addNewAnswer = (e) => {
    // Save user response
    //userResponse[index] = e
    if (index > answers.length || index === 0) {
      const updateAnswers = [...answers, e]
      setAnswers(updateAnswers)
    } else {
      answers[index] = e
      setAnswers(answers)
    }
    
    setLock(true)
    console.log(...answers)
  }

  const nextQuestion = () => {

    // Check for Question being answered
    if (lock === true) {
      setIndex(++index)
      setQuestion(data[index])
      setLock(false)
    }

    bar = document.getElementById("bar")
    bar.style.width = `${(index / data.length) * 100}%`

    // Check if quiz is finished
    if (index > data.length-1) {
      setFinish(true)
      window.location.replace("/Result")
      setIndex(0)
      // Here we would return the userResponse to our backend
    }
  }

  const previous = () => {
    if (index != 0) {
      setIndex(--index)
    }
    setQuestion(data[index])
    setLock(false)
    bar = document.getElementById("bar")
    bar.style.width = `${(index / data.length) * 100}%`
  }
  
  return (
    <div className='container'>
    <div id ="progress">
      <div id="bar" >{Math.round((index / data.length) * 100)}%</div>
    </div>
    {finish?<></>:<> <h2>{question.question}</h2>
    <input type={question.dataType} min={question.lower} max={question.upper} className={question.class} id="answer"></input>
    <div className="button-container">
      <button onClick={previous}>Back</button>
      <button onClick={validateResponse}>Next</button>
    </div>
    <div className="index"> Question {index+1} of {data.length} </div> </>}
  </div>
  )
}

export default QuizComponent;