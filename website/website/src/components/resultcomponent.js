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
    let display1;
    let display11;
    let display12;
    let display13;
    let display14;
    let display2 = location.state.result[2]
    let display3;
    let display4;
    let display5;
    let display6;
    let display7;
    let display8;
    let display9;
    if(location.state.result[0] == 0&&location.state.result[1] == 0)
    {
        display = <p>No risk of heart disease detected; the inputs you entered are within the healthy ranges</p>
    }
    else if((location.state.result[0] == 1&&location.state.result[1] == 0)||(location.state.result[0] == 0&&location.state.result[1] == 1))
    {
        display = <p> Risk of heart disease detected </p>
        if(display2[1]== 0)
        {
            display2[1] = "male"

        }
        if(display2[1]== 1)
        {
            display2[1] = "female"
    
        }

        if(display2[2]== 0)
        {
            display2[2] = "typical angina"

        }
        if(display2[2]== 1)
        {
            display2[2] = "atypical angina"
    
        }
        if(display2[2]== 2)
        {
            display2[2] = "non-anginal pain"

        }
        if(display2[2]== 3)
        {
            display2[2] = "asymptomatic"
    
        }
    
        if(display2[4]== 0)
        {
            display2[4] = "no"

        }
        if(display2[4]== 1)
        {
            display2[4] = "yes"
    
        }

        let age = <p> age: {display2[0]}</p>
        let gender = <p> gender: {display2[1]}</p>
        let cp =  <p> chest pain type: {display2[2]}</p>
        let mhr = <p> maximum heart rate: {display2[3]}</p>
        let exInduceAngina = <p> exercise induced angina: {display2[4]}</p>
        let numberMajorVassels  = <p>number of major vessels colored by cardiac fluoroscopy: {display2[5]}</p>
        let impulseLevel = <p>impulse level: {display2[6]}</p>
        let sbp = <p> systolic blood pressure: {display2[7]}</p>
        let ckMbLevel = <p> (CK-MB) level: {display2[8]}</p>
        let tL = <p> troponin level: {display2[9]}</p>
        
        if(display2[3] < 178 && display2[0] >= 20)
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
            display5 = <p> Your maximum heart rate is less than 178 bpm (beats per minute), the minimum healthy limit in your case </p>
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }
        else if (display2[3] < 168 && (display2[0] >= 30))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
            display5 = <p> Your maximum heart rate is less than 168 bpm (beats per minute), the minimum healthy limit in your case </p>
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>

        }
        else if (display2[3] < 163 && (display2[0] >= 35))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
            display5 = <p> Your maximum heart rate is less than 163 bpm (beats per minute), the minimum healthy limit in your case </p> 
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }
        else if (display2[3] < 158 && (display2[0] >= 40))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
            display5 = <p> Your maximum heart rate is less than 158 bpm (beats per minute), the minimum healthy limit in your case </p>
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p> 
        }
        else if (display2[3] < 153 && (display2[0] >= 45))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
            display5 = <p> Your maximum heart rate is less than 153 bpm (beats per minute), the minimum healthy limit in your case </p> 
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }
        else if (display2[3] < 148 && (display2[0] >= 50))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
            display5 = <p> Your maximum heart rate is less than 148 bpm (beats per minute), the minimum healthy limit in your case </p> 
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }
        else if (display2[3] < 143 && (display2[0] >= 55))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
            display5 = <p> Your maximum heart rate is less than 143 bpm (beats per minute), the minimum healthy limit in your case </p>
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p> 
        }
        else if (display2[3] < 138 && (display2[0] >= 60))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
            display5 = <p> Your maximum heart rate is less than 138 bpm (beats per minute), the minimum healthy limit in your case </p> 
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }
        else if (display2[3] < 133 && (display2[0] >= 65))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
            display5 = <p> Your maximum heart rate is less than 133 bpm (beats per minute), the minimum healthy limit in your case </p>  
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }
        else if (display2[3] < 128 && (display2[0] >= 70))
        {
            mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
            display5 = <p> Your maximum heart rate is less than 150 bpm (beats per minute), the minimum healthy limit in your case </p>  
            display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
        }

    

            



        if(display2[6] < 60 || display2[6]> 100)
        {
            impulseLevel = <p style={{ color: 'red' }}>impulse level: {display2[6]}</p>
            if(display2[6] < 60)
            { 
                 display6 = <p> Your resting heart rate is less than the healthy range, 60-100 bpm (beats per minute) </p>
                 display11 = <p> To learn more about resting heart rate, click here: https://www.health.harvard.edu/heart-health/what-your-heart-rate-is-telling-you</p>
            } 
    
            else if(display2[6] > 100) 
            {
                display6 = <p> Your resting heart rate is greater than the healthy range, 60-100 bpm (beats per minute)</p>
                display11 = <p> To learn more about resting heart rate, click here: https://www.health.harvard.edu/heart-health/what-your-heart-rate-is-telling-you</p>
            }
            
        }

        if(display2[7]<90||display2[7]>120)
        {
            sbp = <p style={{ color: 'red' }}> systolic blood pressure: {display2[7]}</p>

            if(display2[7] < 90)
            { 
                display7 = <p> Your systolic blood pressure is less than the healthy range, 90-120 mm Hg (millimeters of mercury) </p>
                display12 = <p> To learn more about systolic blood pressure, click here: https://www.nhlbi.nih.gov/health/high-blood-pressure</p>
            } 
        
            else if(display2[7] > 120) 
            {
                display7 = <p> Your systolic blood pressure is greater than the healthy range, 90-120 mm Hg (millimeters of mercury)</p>
                display12 = <p> To learn more about systolic blood pressure, click here: https://www.nhlbi.nih.gov/health/high-blood-pressure</p>
            }
        }

        if(display2[8]<5||display2[8]>25)
        {
            ckMbLevel = <p style={{ color: 'red' }}> (CK-MB) level: {display2[8]}</p>  
            if(display2[8] < 5)
            { 
                display8 = <p> Your (CK-MB) level is less than the healthy range, 5-25 IU/L (international units per liter) </p>
                display13 = <p> To learn more about (CK-MB) level, click here: https://www.ncbi.nlm.nih.gov/books/NBK352/</p>
            } 
            
            else if(display2[8] > 25) 
            {
                display8 = <p> Your (CK-B) is greater than the healthy range, 5-25 IU/L (international units per liter) </p>
                display13 = <p> To learn more about (CK-MB) level, click here: https://www.ncbi.nlm.nih.gov/books/NBK352/</p>
            }
        }
        if(display2[9] >= 0.04)
        {
            tL = <p style={{ color: 'red' }}> troponin level: {display2[9]}</p> 
            display9 = <p> Your troponin level is greater than the healthy limit, which is less than 0.04 ng/mL (nanograms/millileter) </p>
            display14 = <p> To learn more about troponin levels, click here: https://my.clevelandclinic.org/health/diagnostics/22770-troponin-test</p>

        }
        display4 = <p> Due to one or more inputs being outside the healthy range, professional consultation is recommended </p>
    
        display3 = <div><p style={{ color: 'white' }}>Summary of your Input:</p>{age}{gender}{cp}{mhr}{exInduceAngina}{numberMajorVassels}
        {impulseLevel}{sbp}{ckMbLevel}{tL}</div>
    }
    else if(location.state.result[0] == 1 &&location.state.result[1] == 1 )
    {
        display = <p> Elevated risk of heart disease detected </p>
        if(display2[1]== 0)
        {
            display2[1] = "male"

        }
        if(display2[1]== 1)
        {
            display2[1] = "female"
    
        }

        if(display2[2]== 0)
        {
            display2[2] = "typical angina"

        }
        if(display2[2]== 1)
        {
            display2[2] = "atypical angina"
    
        }
        if(display2[2]== 2)
        {
            display2[2] = "non-anginal pain"

        }
        if(display2[2]== 3)
        {
            display2[2] = "asymptomatic"
    
        }

        if(display2[4]== 0)
        {
            display2[4] = "no"

        }
        if(display2[4]== 1)
        {
            display2[4] = "yes"
    
        }
        
        let age = <p> age: {display2[0]}</p>
        let gender = <p> gender: {display2[1]}</p>
        let cp =  <p> chest pain type: {display2[2]}</p>
        let mhr = <p> maximum heart rate: {display2[3]}</p>
        let exInduceAngina = <p> exercise induced angina: {display2[4]}</p>
        let numberMajorVassels  = <p>number of major vessels colored by cardiac fluoroscopy: {display2[5]}</p>
        let impulseLevel = <p>impulse level: {display2[6]}</p>
        let sbp = <p> systolic blood pressure: {display2[7]}</p>
        let ckMbLevel = <p> (CK-MB) level: {display2[8]}</p>
        let tL = <p> troponin level: {display2[9]}</p>

        if(display2[3] < 178 && display2[0] >= 20)
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
                display5 = <p> Your maximum heart rate is less than 178 bpm (beats per minute), the minimum healthy limit in your case </p>
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
            else if (display2[3] < 168 && (display2[0] >= 30))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
                display5 = <p> Your maximum heart rate is less than 168 bpm (beats per minute), the minimum healthy limit in your case </p>
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
    
            }
            else if (display2[3] < 163 && (display2[0] >= 35))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
                display5 = <p> Your maximum heart rate is less than 163 bpm (beats per minute), the minimum healthy limit in your case </p> 
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
            else if (display2[3] < 158 && (display2[0] >= 40))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
                display5 = <p> Your maximum heart rate is less than 158 bpm (beats per minute), the minimum healthy limit in your case </p>
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p> 
            }
            else if (display2[3] < 153 && (display2[0] >= 45))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
                display5 = <p> Your maximum heart rate is less than 153 bpm (beats per minute), the minimum healthy limit in your case </p> 
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
            else if (display2[3] < 148 && (display2[0] >= 50))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
                display5 = <p> Your maximum heart rate is less than 148 bpm (beats per minute), the minimum healthy limit in your case </p> 
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
            else if (display2[3] < 143 && (display2[0] >= 55))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
                display5 = <p> Your maximum heart rate is less than 143 bpm (beats per minute), the minimum healthy limit in your case </p>
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p> 
            }
            else if (display2[3] < 138 && (display2[0] >= 60))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p> 
                display5 = <p> Your maximum heart rate is less than 138 bpm (beats per minute), the minimum healthy limit in your case </p> 
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
            else if (display2[3] < 133 && (display2[0] >= 65))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
                display5 = <p> Your maximum heart rate is less than 133 bpm (beats per minute), the minimum healthy limit in your case </p>  
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
            else if (display2[3] < 128 && (display2[0] >= 70))
            {
                mhr =   <p style={{ color: 'red' }}> maximum heart rate: {display2[3]}</p>
                display5 = <p> Your maximum heart rate is less than 150 bpm (beats per minute), the minimum healthy limit in your case </p>  
                display1 = <p> Here is more information on maximum heart rate: https://www.hopkinsmedicine.org/health/wellness-and-prevention/understanding-your-target-heart-rate </p>
            }
    
        
    
        if(display2[6] < 60 || display2[6]> 100)
        {
            impulseLevel = <p style={{ color: 'red' }}>impulse level: {display2[6]}</p>
            if(display2[6] < 60)
            { 
                display6 = <p> Your resting heart rate is less than the healthy range, 60-100 bpm (beats per minute) </p>
                display11 = <p> To learn more about resting heart rate, click here: https://www.health.harvard.edu/heart-health/what-your-heart-rate-is-telling-you</p>
            } 
        
            else if(display2[6] > 100) 
            {
                display6 = <p> Your resting heart rate is greater than the healthy range, 60-100 bpm (beats per minute) </p>
                display11 = <p> To learn more about resting heart rate, click here: https://www.health.harvard.edu/heart-health/what-your-heart-rate-is-telling-you</p>
            }
                
        }

        if(display2[7]<90||display2[7]>120)
        {
            sbp = <p style={{ color: 'red' }}> systolic blood pressure: {display2[7]}</p>
            if(display2[7] < 90)
            { 
                display7 = <p> Your systolic blood pressure is less than the healthy range, 90-120 mm Hg (millimeters of mercury) </p>
                display12 = <p> To learn more about systolic blood pressure, click here: https://www.nhlbi.nih.gov/health/high-blood-pressure</p>
            
            } 
            
            else if(display2[7] > 120) 
            {
                display7 = <p> Your systolic blood pressure is greater than the healthy range, 90-120 mm Hg (millimeters of mercury)</p>
                display12 = <p> To learn more about systolic blood pressure, click here: https://www.nhlbi.nih.gov/health/high-blood-pressure</p>
            }
        }

        if(display2[8]<5||display2[8]>25)
        {
            ckMbLevel = <p style={{ color: 'red' }}> (CK-MB) level: {display2[8]}</p> 
            if(display2[8] < 5)
            { 
                display8 = <p> Your (CK-MB) level is less than the healthy range, 5-25 IU/L (international units per liter) </p>
                display13 = <p> To learn more about (CK-MB) level, click here: https://www.ncbi.nlm.nih.gov/books/NBK352/</p>
            } 
                
            else if(display2[8] > 25) 
            {
                display8 = <p> Your (CK-MB) level is greater than the healthy range, 5-25 IU/L (international units per liter) </p>
                display13 = <p> To learn more about (CK-MB) level, click here: https://www.ncbi.nlm.nih.gov/books/NBK352/</p>
            } 
        }
        if(display2[9] >= 0.04)
        {
            tL = <p style={{ color: 'red' }}> troponin level: {display2[9]}</p> 
            display9 = <p> Your troponin level is greater than the healthy limit, which is less than 0.04 ng/mL (nanograms/millileter) </p>
            display14 = <p> To learn more about troponin levels, click here: https://my.clevelandclinic.org/health/diagnostics/22770-troponin-test</p>
        }
        display4 = <p> Due to one or more inputs being outside the healthy range, professional consultation is strongly recommended. </p>


        display3 = <div><p style={{ color: 'white' }}>Summary of your Input:</p>{age}{gender}{cp}{mhr}{exInduceAngina}{numberMajorVassels}{impulseLevel}
        {sbp}{ckMbLevel}{tL}</div>

      
    }
        

    return (
        <div className='results'>
           
            {display}
            <div className='summary'>
            {display3}

            </div>
            <div className='normal-ranges'>
           
            {display4}
            {display5}
            {display1}
            {display6}
            {display11}
            {display7}
            {display12}
            {display8}
            {display13}
            {display9}           
            {display14}

            </div>
            
            

        </div>
    )
}
export default ResultsComponent