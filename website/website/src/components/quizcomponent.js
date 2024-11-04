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
  let [question, setQuestion] = useState(data[index])
  let [finish, setFinish] = useState(false)
  let [userResponse, setUserResponse] = useState([])
  let temp;
  let bar = document.getElementById("bar")

 
  const validateResponse = () => {
    temp = document.getElementById("answer").value
    if (temp === "") {
      alert("No response was recorded")
    }
    if (typeof temp === "string") {
      if (temp === "male" || temp === "positive") {
        temp = 1
      } else if (temp === "female" || temp === "negative") {
        temp = 0
      }
      else {
        temp = parseInt(temp, 10)
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
    userResponse.push(e)
    console.log(userResponse[index])
  }

  const nextQuestion = () => {
    // Check for Question being answered
    console.log(userResponse)
    setIndex(++index)
    setQuestion(data[index])

    bar = document.getElementById("bar")
    bar.style.width = `${(index / data.length) * 100}%`

    // Check if quiz is finished
    if (index > data.length-1) {
      setFinish(true)
     // window.location.replace("/Result")
     console.table(...[userResponse])
      setIndex(0)
      // Here we would return the userResponse to our backend

      const formData = new FormData ()

        //// you can hard code any number instead of userResponse[i] for testing
        formData.append("age",userResponse[0])
        formData.append("gender", userResponse[1])
        formData.append("impulseLevel",userResponse[2])
        formData.append("systolicBlood",userResponse[3])
        formData.append("diastolicBlood",userResponse[4])
        formData.append("glucoseLevel",userResponse[5])
        formData.append("kcmLevel?",userResponse[6])
        formData.append("troponinLevel?",userResponse[7])
        formData.append("class",userResponse[8])
        

        console.log([...formData])

         const submission = axios.postForm('http://localhost:8090/api/example',formData)

              .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                })

    }
  }

  const previous = () => {
    setIndex(--index)
    if (index < 0) {
      setIndex(0)
    }
    setQuestion(data[index])
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
    <h3>Range: {data[index].upper} - {data[index].lower}</h3>
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