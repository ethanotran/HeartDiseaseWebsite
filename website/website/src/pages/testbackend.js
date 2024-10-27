import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react'
import axios from "axios"
import NavBar from "../components/navbar";

/*
this is a test page so it cannot be access by normal means through the webpage. you will need to use an specific path
on your searching engine. here: http://localhost:3000/testbackend
*/

//sources:
// use for the post function https://medium.com/@jainsnehasj6/using-axios-for-integrating-react-and-flask-with-mysql-f09e9f6e772c
// use for setting the submission bottom: https://www.youtube.com/watch?v=LW23zgE_2Cg&t=307s
//use to set fetchAPI and flask back end: https://www.youtube.com/watch?v=ctQMqqEo4G8&t=972s

export default function Testbackend()
{
  
    const [post, setPost] = useState(
        {
            age: ''
        }
    );

  



    const HandleInput = (event) =>{
      
        setPost({...post,[event.target.name]: event.target.value});
        

        }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        const submission = await axios.post('http://localhost:8090/api/input',post)

        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    const fetchAPI = async () =>{
      const response = await axios.get("http://localhost:8090/api/values");
      console.log(response.data.values);
    };
    useEffect(() =>{
      fetchAPI()
    },[])
      return(

        <div>
          <NavBar/>
          <form onSubmit={handleSubmit}>
            Enter your Age:  <input type="text" onChange={HandleInput}  name="age"></input><br/><br/>
            <button >Submit</button>
        </form> 
        
      </div>
      )

}