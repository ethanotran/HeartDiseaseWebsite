import React, { useRef, useState } from "react";
import './quizcomponent.css'
import { data } from "./questionlist";

// Code inspired by tutorial from GreatStack Youtube Channel, https://www.youtube.com/watch?v=VMZ7lcSdVnY
const QuizComponent = () => {

  let [index, setIndex] = useState(0)
  let [lock, setLock] = useState(false)
  let [question, setQuestion] = useState(data[index])
  let [finish, setFinish] = useState(false)
  let temp
  let userResponse = new Array(data.length)

  const validateResponse = () => {
    temp = document.getElementById("answer").value
    if (temp === "") {
      return
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

  const nextQuestion = () =>{

    // Check for Question being answered
    if (lock === true) {
      setIndex(++index)
      setQuestion(data[index])
      setLock(false)
    }

    // Check if quiz is finished
    if (index > data.length-1) {
      setFinish(true)
      setIndex(0)
      // Here we would return the userResponse to our backend
    }
  }
  
  return (
    <div className='container'>
    <h1>Quiz Sector</h1>
    <hr/>
    {finish?<></>:<> <h2>{index+1}. {question.question}</h2>
    <input type={data[index].dataType} id="answer"></input>
    <button onClick={validateResponse}>Next</button>
    <div className="index"> Question {index+1} of {data.length} </div> </>}
  </div>
  )
}

export default QuizComponent;