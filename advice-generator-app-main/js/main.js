
//selecting DOM
var idAdvice = $('h2');
var advice = $('h1');

//api request function
function getAdvice() {
  fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' }).then(function(response) {
  return response.json();
}).then(function(data) {
  idAdvice[0].innerText = ` ADVICE # ${data.slip.id}`;
  advice[0].innerText = `"${data.slip.advice}"`;
});
}

//function rotate dice
function diceRotate(value, time) {
  $('.dice__bg').animate({transform: `+=${value}`}, {
    step: function (value) {
      $(this).css('transform' , `rotate(${value}deg)`)
    },
    duration: time
  }, 'linear')
}

//start advice
getAdvice();
diceRotate(1080, 2000);

$('.dice__bg').click( e => {
  getAdvice();
  diceRotate(1080, 500);
});


