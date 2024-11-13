import NavBar from "../components/navbar";
import ResultsComponent from "../components/resultcomponent";

export default function Results() {
  return(
    <div>
      <NavBar/>
      <div className="page1">
        <h1 className="header-box-info">Results page</h1>
        <p className="information">Quiz has finished</p>
        <ResultsComponent/>
      </div>
    </div>
  )
}