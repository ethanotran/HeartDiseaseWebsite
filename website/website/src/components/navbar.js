import React from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const buttonNav = useNavigate();
  return (
    <header className="header">
        <nav className="navbar">
            <a href="/home">Home</a>
            <a href="/model">Model</a>
            <a href="/about">About Us</a>
            <button className ='b' onClick = {()=> buttonNav("/quizentry")}>Quiz</button>
        </nav>
    </header> 
  )
}

export default NavBar