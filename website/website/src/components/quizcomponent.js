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
  let [userResponse, setUserResponse] = useState([])
  let temp;
  let bar = document.getElementById("bar")
  const navigate = useNavigate()

 
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
      userResponse[index] = temp
      nextQuestion()
    } else {
      alert("Invalid response: Answer cannot be recognized by model")
    }
  }


  const nextQuestion = () => {
    // Check for Question being answere
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

      axios({method: "POST",
        url: "http://localhost:8090/api/input",
        data: {
          "age": userResponse[0],
          "gender": userResponse[1],
          "cp": userResponse[2],
          "trtbps": userResponse[3],
          "chol": userResponse[4],
          "fbs": userResponse[5],
          "restecg": userResponse[6],
          "thalachh": userResponse[7],
          "exng": userResponse[8],
          "caa": userResponse[9]
        }
      }).then(function (response) {
        navigate("/results", {state: {result:response.data}, replace:true})
      })
      .catch(function(error) {
        console.log(error)
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