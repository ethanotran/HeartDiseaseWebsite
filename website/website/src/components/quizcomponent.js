import React, { useRef, useState } from "react";
import './quizcomponent.css'
import { data } from "./questionlist";
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

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [finish, setFinish] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  

  let optionArray = [Option1, Option2, Option3, Option4];

  const setAnswer = (e) => {
      setLock(true);
  }
  const next = () => {
    if (lock === true) {
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
    }

    if (index === data.length-1) {
      setFinish(true);
    }
  }

  return (
    <div className='container'>
      <h1>Quiz Sector</h1>
      <hr/>
      {finish?<></>:<> <h2>{index+1}. {question.question}</h2>
      <ul>
        <li onClick={(e)=>{setAnswer(e, 1)}}>{question.option1}</li>
        <li onClick={(e)=>{setAnswer(e, 2)}}>{question.option2}</li>
        <li onClick={(e)=>{setAnswer(e, 3)}}>{question.option3}</li>
        <li onClick={(e)=>{setAnswer(e, 4)}}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index"> Question {index+1} of {data.length} </div> </>}
    </div>
  )
}

export default QuizComponent;