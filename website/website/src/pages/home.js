import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const buttonNav = useNavigate();
  return(
    <div>
      <h1>Home Page</h1>
      <NavBar/>
      <>
        
        <p1>This will be our landing page. #WeWillPrevail</p1>
        <button onClick = {()=> buttonNav("/info")}>More About Heart Disease</button>
        <button onClick = {()=> buttonNav("/stats")}>
          Statistics About Heart Disease
        </button>
        <button onClick = {()=> buttonNav("/model")}>Learn About our Model</button>
      </>
    </div>
  )
}