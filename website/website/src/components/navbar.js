import React from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
 
  return (
    <header className="header">
       <a className="logo">Mediks</a>
        <nav className="navbar">
            <a href="/home">Home</a>
            <a href="/model">Model</a>
            <a href="/about">About Us</a>
            
        </nav>
        
        
    </header> 
  )
}

export default NavBar