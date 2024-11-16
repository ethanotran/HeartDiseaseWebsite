import {useLocation} from 'react-router-dom'

/* Standard Healthy Ranges:
Pressure High:  {
18-39 years old 110 mm Hg,
40-59 = 122,
60+ = 139}

Impulse (resting heart rate):
60-100
{This is the standard range, but lower than this can indicate a strong heart}

kcm (Creatine Kinase MB [CK-MB]):
5-25 IU/L

Troponin:
0-0.04 ng/mL

thalachh (Max Heart Rate):
Predicted to be 220 - Age

caa (# Major vessels colored by fluoroscopy):
Should be 0
(I assume the type of fluoroscopy is coronary angiography, which identifies blockages in arteries, and thus we would want 0 vessels marked as blocked)

cp (Chest Pain Type):
Healthy should be 4 = asymptomatic

Exng (yes or no for exercise induced angina):
Should be no 
(Angina is a chest pain or discomfort that occurs when the heart muscle doesnt get enough oxygen rich blood)

*/
const ResultsComponent = () => {
    let location = useLocation();

    let display; 
    if(location.state.result[0] == 0&&location.state.result[1] == 0)
    {
        display = <p>you aren’t at risk of heart disease</p>
    }
    else if((location.state.result[0] == 1&&location.state.result[1] == 0)||(location.state.result[0] == 0&&location.state.result[1] == 1))
    {
        display = <p>you may have elevated risk of heart disease but here are the concerning inputs</p>
    }
    else if(location.state.result[0] == 1 &&location.state.result[1] == 1 )
    {
        display = <p>your input indicates significant risk of heart disease</p>
    }
        

    return (
        <div>
            <h1 className="header-box-info">Results page</h1>
            {display}
        </div>
    )
}
export default ResultsComponent