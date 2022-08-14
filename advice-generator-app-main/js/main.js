"use strict";

//selecting DOM
var idAdvice = document.getElementsByTagName('h2');
var advice = document.getElementsByTagName('h1');
var diceBtn = document.getElementsByClassName('.dice__bg');

//api request function
function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then(function(response) {
  return response.json();
}).then(function(data) {
  idAdvice[0].innerText = ` ADVICE # ${data.slip.id}`;
  advice[0].innerText = `"${data.slip.advice}"`;
});
}

//start advice
getAdvice();

diceBtn = addEventListener('click', getAdvice);

