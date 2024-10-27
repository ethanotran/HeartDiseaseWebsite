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
  let temp
  let userResponse = new Array(data.length)
  let bar = document.getElementById("bar")

 
  const validateResponse = () => {
    temp = document.getElementById("answer").value
    if (temp === "") {
      alert("No repsonse was recorded")
    }
    if (typeof temp === "string") {
      if (temp === "male" || temp === "positive") {
        temp = 1
      } else if (temp === "female" || temp === "negative") {
        temp = 0
      }
    }

    if (temp <= data[index].upper && temp >= data[index].lower) {
      setAnswer(temp)
      nextQuestion()
    } else {
      alert("Invalid response: Answer cannot be recognized by model")
    }
  }

  const setAnswer = (e) => {
    // Save user response
    userResponse[index] = e
    console.log(userResponse[index])
    setLock(true)
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
    setIndex(--index)
    if (index < 0) {
      setIndex(0)
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
    <hr/>
    {finish?<></>:<> <h2>{question.question}</h2>
    <input type={data[index].dataType} id="answer"></input>
    <div className="button-container">
      <button onClick={previous}>Back</button>
      <button onClick={validateResponse}>Next</button>
    </div>
    <div className="index"> Question {index+1} of {data.length} </div> </>}
  </div>
  )
}

export default QuizComponent;