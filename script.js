var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementbyId("gradient");


function setGradient(){
    "linear-gradient(to right, "+color1.value
    +", "+color2.value+")";

    css.textContent = body.style.background + ";";
}

color1.addEventListner("input", setGradient);

color2.addEventListener("input", setGradient);