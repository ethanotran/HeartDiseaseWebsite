import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { data } from "../components/questionlist";

export default function QuizEntry() {
  const buttonNav = useNavigate();
  return(
    <div>
      <NavBar/>
      <div className="header-box">
        <h1 >You will be asked {data.length} questions about your medical
              history, so our model can predict how prone you are to heart disease. Click the button
              below to begin.
        </h1>
        <button className="quiz-button"onClick = {() => buttonNav('quiz')}> Begin Quiz</button>
      </div>
      
    </div>
  )
}