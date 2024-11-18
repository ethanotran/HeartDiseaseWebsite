import {useLocation} from 'react-router-dom'
import "./resultcomponent.css"

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
    let display2 = location.state.result[2]
    let display3;
    let display4;
    if(location.state.result[0] == 0&&location.state.result[1] == 0)
    {
        display = <p>You are not at risk of heart disease. The inputs you entered are within the healthy ranges</p>
    }
    else if((location.state.result[0] == 1&&location.state.result[1] == 0)||(location.state.result[0] == 0&&location.state.result[1] == 1))
    {
        display = <p>You may be at risk of heart disease; here is a list of healthy ranges to compare with your inputs </p>
        display4 = <div><p> Healthy Ranges</p><p> maximum heart rate: 220 - Your Age</p><p>Impulse: 60-100 bpm</p><p> Systolic Blood Pressure: 90-120 mmHG</p>
        <p> (CK-MB) level: 5-25 IU/L</p><p> troponin level: less than 0.04ng/mL</p></div>

        if(display2[1]== 0)
        {
            display2[1] = "male"

        }
        if(display2[1]== 1)
        {
            display2[1] = "female"
    
        }
        if(display2[4]== 0)
        {
            display2[4] = "no"

        }
        if(display2[4]== 1)
        {
            display2[4] = "yes"
    
        }

        display3 = <div><p>Summary of Your Input:</p><p> age: {display2[0]}</p><p> gender: {display2[1]}</p><p> chest pain type: {display2[2]}</p><p> maximum heart rate: {display2[3]}</p>
        <p> exercise induced angina: {display2[4]}</p><p>number of major vessels colored by cardiac fluoroscopy: {display2[5]}</p><p>impulse level: {display2[6]}</p><p> systolic blood pressure: {display2[7]}</p>
        <p> (CK-MB) level: {display2[8]}</p><p> troponin level: {display2[9]}</p></div>
       // display2 = location.state.summary

    }
    else if(location.state.result[0] == 1 &&location.state.result[1] == 1 )
    {
        display = <p>Your input indicates an elevated risk of heart disease; here is a list of healthy ranges to compare with your inputs </p>
        display4 = <div><p> Healthy Ranges</p><p> maximum heart rate: 220 - Your Age</p><p>Impulse: 60-100 bpm</p><p> Systolic Blood Pressure: 90-120 mmHG</p>
        <p> (CK-MB) level: 5-25 IU/L</p><p> troponin level: less than 0.04ng/mL</p></div>
        if(display2[1]== 0)
        {
            display2[1] = "male"

        }
        if(display2[1]== 1)
        {
            display2[1] = "female"
    
        }

        if(display2[4]== 0)
        {
            display2[4] = "no"

        }
        if(display2[4]== 1)
        {
            display2[4] = "yes"
    
        }
    
        display3 = <div><p>Summary of your Input:</p><p> age: {display2[0]}</p><p> gender: {display2[1]}</p><p> chest pain type: {display2[2]}</p><p> maximum heart rate: {display2[3]}</p>
        <p> exercise induced angina: {display2[4]}</p><p>number of major vessels colored by cardiac fluoroscopy: {display2[5]}</p><p>impulse level: {display2[6]}</p><p> systolic blood pressure: {display2[7]}</p>
        <p> (CK-MB) level: {display2[8]}</p><p> troponin level: {display2[9]}</p></div>
    }
        

    return (
        <div className='results'>
           
            {display}
            <div className='summary'>
            {display3}

            </div>
            <div className='normal-ranges'>
            {display4}

            </div>
            
            

        </div>
    )
}
export default ResultsComponent