import React, { useRef, useState } from "react";
import './quizcomponent.css'
import { data } from "./questionlist";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  let [question, setQuestion] = useState(data[index])
  let [finish, setFinish] = useState(false)
  let [answers, setAnswers] = useState([])
  let [lock, setLock] = useState(false)
  let [questionType, setQuestionType] = useState(data[index].questionType)
  let bar = document.getElementById("bar")
  const navigate = useNavigate()

  const addNewAnswer = (ans) => {
    if (index > answers.length) {
      const updateAnswers = [...answers, ans]
      setAnswers(updateAnswers)
    } else {
      answers[index] = ans
      setAnswers(answers)
    }

    console.log(...answers)

  }

  
  const nextQuestion = () => {
    validateAnswer(document.getElementById("answer").value)
    isFinished()

    if (lock === true) {
      setIndex(++index)
      setQuestion(data[index])
      setQuestionType(question.questionType)
      setLock(false)
    }
    
    bar = document.getElementById("bar")
    if (index === data.length-1) {
      bar.style.width = `100%`
    } else {
      bar.style.width = `${(index / data.length) * 100}%`
    }    
  }

  const isFinished = () => {
    if (index === data.length-1) {
      bar.style.width = `${(index / data.length) * 100}%`
      setFinish(true)
     console.table(...[answers])
      setIndex(0)
      // Here we send the answers array to the backend
      axios({method: "POST",
        url: "http://localhost:8090/api/input",
        data: {
          "age": answers[0],
          "gender": answers[1],
          "cp": answers[2],
          "thalachh": answers[3],
          "exng": answers[4],
          "caa": answers[5],
          "impulse": answers[6],
          "pressurehigh": answers[7],
          "kcm": answers[8],
          "troponin": answers[9]
        }
      }).then(function (response) {

        navigate("/results", {state: {result:[response.data.value1,response.data.value2,answers]}, replace:true})
       

      })
      .catch(function(error) {
        console.log(error)
      })

      

    }
  }

  const previousQuestion = () => {
    if (index > 0) {
      setIndex(--index)
    }

    setQuestion(data[index])
    bar = document.getElementById("bar")
    bar.style.width = `${(index / data.length) * 100}%`
    
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
    if (ans == "male"){
      addNewAnswer(0)
      return
          
    }
    else if (ans == "female") {
      addNewAnswer(1)
     return
    }
    addNewAnswer(ans)

  }

  if (questionType === "slider") {
      let slider = document.getElementById("answer")
      let output = document.getElementById("demo")
      output.innerHTML = slider.value
      slider.oninput = function() {
        output.innerHTML = slider.value
      }
  }
  
  return (
    <div className='container'>
      <h1>Quiz Sector</h1>
        <main>
          <div className='container'>
            <div id ="progress">
              <div id="bar" >{Math.round((index / data.length) * 100)}%</div>
            </div>
          </div>
          <h2>{question.question}</h2>
          {
          
          // Checks the type of question and print the appropriate html format
          (question.questionType === "dropdown")? <>
          <div className="select-box">
            <select id="answer" placeholder="">
              <option value={question.option1}>{question.option1}</option>
              <option value={question.option2}>{question.option2}</option>
              <option value={question.option3}>{question.option3}</option>
              <option value={question.option4}>{question.option4}</option>
            </select>
          </div>
          
          </>:<></>
          
          
          || (question.questionType === "input")? <>
          <input type={question.type} min={question.lower} max={question.upper} step={question.step} id="answer" className="input-box"></input>
          </>:<></> 
          
          || (question.questionType === "slider")?<>
          <input type={question.type} min={question.lower} max={question.upper} step={question.step} id="answer" className="slider-main"></input>
          </>:<></> 

          || finish? <>
          <p>Redirecting</p>
          </>:<></>
        }
        <p><span id="demo"></span></p>
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