import React from "react";
import LAYOUT from "./LAYOUT";
import NAVBAR from "./NAVBAR";
import SERVICES from './SERVICES';
import ABOUT from './ABOUT';


export default class App extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    var navbar = document.querySelector(".navbar");
window.onscroll = function () { 
 "use strict";
 if (pageYOffset >0 ) {
     navbar.classList.add("scrolled");     
 } 
 else { 
        navbar.classList.remove("scrolled");
 }
};

// scroll to topic
$("#services-link").click(function() {
 $('html, body').animate({
     scrollTop: $("#services").offset().top
 }, 2000);
});

$("#projects-link").click(function() {
 $('html, body').animate({
     scrollTop: $("#projects").offset().top
 }, 2000);
});
$("#about-link").click(function() {
 $('html, body').animate({
     scrollTop: $("#about").offset().top
 }, 2000);
});


$('#home-link').click(function() {

$('html, body').animate({
scrollTop: '0px'
});
});
  }
  render(){
  return (
    <div className="App">
   

  <NAVBAR/>
  <div class="sticky"> Sorry! Website Under Maintenance</div>
  <LAYOUT/>
  <SERVICES/>
  <ABOUT/>
    </div>
  );
}
}
