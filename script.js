var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var css = document.getElementById('css');
var backcolor = document.getElementById('body');
var randombtn = document.getElementById('random')

function backgroundcolor(){
    backcolor.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";
css.textContent = backcolor.style.background;
 }

color1.addEventListener('input',backgroundcolor);
color2.addEventListener('input',backgroundcolor);

function randomColor() {
    let random = Math.floor(Math.random()*16777215).toString(16);
    let random2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + random;
    color2.value = "#" + random2;
    backgroundcolor();
  }
  
 randombtn.addEventListener("click", randomColor);
//  randomColor();

