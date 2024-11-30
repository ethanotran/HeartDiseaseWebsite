import NavBar from "../components/navbar";
import React from "react";
import "./about.css"


export default function About() {
  return(
    <body>
      <NavBar/>
      <h1 className="page-header3">About Us</h1>
      <div className="body-text3">
      <p >Alex Tran is a computer science student at the University of Florida, and has worked part time as a web developer at a small company focused on marine life conservation. 
        His personal interests include reading, playing tennis, and operating systems, especially Linux.</p>
        <p> Nicholas Tran is a fourth-year computer science student at the University Florida, and has also worked part time as a project manager and web development for Ocean Observation Group. 
          After graduating this winter, he hopes to get a new job in entry-level software engineering or development. His interests include reading, swimming, and boxing. 
        </p>
        <p>Bernardo Rodriguez is a post-baccalaureate student with an initial degree in economics, going for a second bachelors in computer science. After graduating this Winter, 
          he will begin a job as a software developer with Capital One in Virginia. His interests include reading, listening to music, playing video games, and weightlifting. 
        </p>
        <p>Jan Torruellas is a computer science student at the University of Florida. After graduation, he hopes to begin a new chapter working as an entry level software engineer/developer, 
          and eventually begin moving his way up in the hierarchy with an end goal of becoming a project manager in the future. His interests include gaming, listening to music, swimming, and 
          youth mentorship at his local church.
        </p>
        <p>
        Gustavo Bigott is a Computer Science student at the University of Florida. He is an international student who Transferred from Santa Fe College as an associate degree.  
        After graduation he hopes to enter the field as an entry level software developer or full stack web developer. His interests include cooking, reading, 
         pc hardware and playing video games.
        </p>
        </div>
    </body>
  )
}