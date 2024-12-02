import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { data } from "../components/questionlist";
import "./quizentry.css"

export default function QuizEntry() {
  const buttonNav = useNavigate();
  return(
    <div>
     <NavBar/>
      <div className="entry-header">
        <div className="textbox">
        <h1>You will be asked {data.length} questions about you medical history, so our model can predict how prone you are to a heart disease.</h1>
        </div>
        <div> 
        <button  className="quiz-bottom" onClick = {() => buttonNav('quiz')}> Start Quiz</button>
        </div>
      </div>
    </div>
  )
}