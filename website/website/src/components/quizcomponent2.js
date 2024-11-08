import React, { useRef, useState } from "react";
import './quizcomponent.css'
import { data } from "./questionlist2";
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
  let [questionType, setQuestionType] = useState(data[index].questionType)

  const addNewAnswer = (ans) => {
    if (index > answers.length) {
      const updateAnswers = [...answers, ans]
      setAnswers(updateAnswers)
    } else {
      answers[index] = ans
      setAnswers(answers)
    }
  }

  
  const nextQuestion = () => {
    validateAnswer(document.getElementById("answer").value)
    
    if (lock === true) {
      isFinished()
      setIndex(++index)
      setQuestion(data[index])
      setQuestionType(question.questionType)
      setLock(false)
    }
    
  }

  const isFinished = () => {
    if (index === data.length-1) {
      setFinish(true)
      window.location.replace("/Result")
      setIndex(0)
      
      // Here we send the answers array to backend
    }
  }

  const previousQuestion = () => {
    if (index > 0) {
      setIndex(--index)
    }

    setQuestion(data[index])
    setLock(false)
  }

  const validateAnswer = (ans) => {
    const regex = new RegExp("/^\\s*$/")
    if (regex.test(ans)) {
      alert("Empty Response: Please provide a response")
    }

    // Check written response question
    if (questionType === "input") {
      if (ans > question.upper || ans < question.lower) {
        alert("Invalid Response: Your answer falls out of scope")
        return
      }
    }

    // Check slider range
    if (questionType === "slider") {
      if (ans > question.upper || ans < question.lower) {
        alert("Invalid Response: Your answer falls out of scope")
        return
      }
    }

    setLock(true)
    addNewAnswer(ans)

  }
  
  return (
    <div className='container'>
      <h1>Quiz Sector</h1>
        <main>
          <h2>{question.question}</h2>
          {
          // Checks the type of question and print the appropriate html format
          (question.questionType === "mc")? <>
          <select id="answer">
            <option value={question.option1}>{question.option1}</option>
            <option value={question.option2}>{question.option2}</option>
            <option value={question.option3}>{question.option3}</option>
            <option value={question.option4}>{question.option4}</option>
          </select>
          </>:<></>
          
          
          || (question.questionType === "input")? <>
          <input type={question.type} min={question.lower} max={question.upper} id="answer"></input>
          </>:<></> 
          
          || (questionType === "slider")?<>
          <div>
            <p>Value: <span id="demo"></span></p>
            <input type={question.type} min={question.lower} max={question.upper} id="answer" className="slider"></input>
            <div id="selector"></div>
          </div>
          </>:<></> 
        }
        <hr></hr>
          <div className="button-container">
            <button onClick={previousQuestion}>Back</button>
            <button onClick={nextQuestion}>Next</button>
          </div>
          <div className="index"> Question {index+1} of {data.length} </div>
        </main>
    </div>
  )
}

export default QuizComponent;