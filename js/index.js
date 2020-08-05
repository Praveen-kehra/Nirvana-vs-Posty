
var number1 = Math.floor(Math.random() * 6) + 1;
var randomSrc1 = "Dicee Challenge - Starting Files/images/dice" + number1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomSrc1);


var number2 = Math.floor(Math.random() * 6) + 1;
var randomSrc2 = "Dicee Challenge - Starting Files/images/dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if(number1>number2)
  document.getElementById("refresh-me").innerHTML = "Nirvana wins!";
else if(number2>number1)
  document.getElementById("refresh-me").innerHTML = "Posty wins!";
else
  document.getElementById("refresh-me").innerHTML = "Draw!"
