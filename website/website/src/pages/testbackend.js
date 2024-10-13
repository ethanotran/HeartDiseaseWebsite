import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react'
import axios from "axios"
import NavBar from "../components/navbar";


export default function Testbackend()
{

    // const [post, setPost] = useState(
    //     {
    //         age: ' '
    //     }
    // )

  

    const fetchAPI = async () =>{
        const response = await axios.get("http://localhost:8090/api/values");
        console.log(response.data.values);
      };
      useEffect(() =>{
        fetchAPI()
      },[])

    // const HandleInput = (event) =>{
    //     setPost({...post,[event.target.name]: event.target.event})

    //     }

    // const handleSubmit = (event) =>
    // {
    //     event.preventDefault()
    //     axios.post("http://localhost:8090/api/input",{post})
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    // }

    const postToAPI = async () =>
    {
    axios.post('http://localhost:8090/api/input', {
        age: '32',
       
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    }
    useEffect(() =>{
        postToAPI()
      },[])
      
      return(

        <div>
        {/* <NavBar/>
        <form onSubmit={handleSubmit}>
            Enter your Age:  <input type="text" onChange={HandleInput}  name="enterAge"></input><br/><br/>
            <button >Submit</button>
        </form> */}
      </div>
      )

}