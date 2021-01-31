import React from 'react'

export default function NAVBAR() {
    
    function bars_clicked(){
        var navbar = document.querySelector(".navbar");
      console.log("BARS CLICKED");
        var button=document.querySelector(".signup");
        button.classList.toggle("signup-clicked");
        var div_nav_clicked=document.querySelector(".div-nav-links");
        div_nav_clicked.classList.toggle("div-nav-links-clicked");
        var ul_links=document.querySelector(".ul-nav-links");
        ul_links.classList.toggle("ul-nav-links-clicked");
        navbar.classList.toggle("bars_clicked");
    } 
    return (
        <>
            <div className="navbar">
    <div className="logo"></div>
<div className="div-nav-links">
    <ul className="ul-nav-links">
        <li className="li-link" id="home-link" onClick={bars_clicked} >Home</li>
        <li className="li-link" id="services-link" onClick={bars_clicked}>Services</li>
        <li className="li-link" id="projects-link" onClick={bars_clicked}>Projects</li>
        <li className="li-link" id="about-link" onClick={bars_clicked}>About</li>
    </ul>
</div>
<div className="signup"><button>Contact Us</button></div>
<div className="bars" onClick={bars_clicked}><i className="fas fa-bars"></i></div>
</div>
        </>
    )
}
