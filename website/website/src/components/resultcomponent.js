import {useLocation} from 'react-router-dom'
const ResultsComponent = () => {
    let location = useLocation();
    return (
        <div>
            <h1 className="header-box-info">Results page</h1>
            <p>{location.state.result}</p>
        </div>
    )
}
export default ResultsComponent