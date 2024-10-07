import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function QuizEntry() {
  const buttonNav = useNavigate();
  return(
    <div>
      <NavBar/>
      <h2>Quiz Entry Page</h2>
      <p1>
        This page would briefly introduce the quiz and house a button to start for the user.
      </p1>
      <button onClick = {() => buttonNav('quiz')}> Begin Quiz</button>
    </div>
  )
}