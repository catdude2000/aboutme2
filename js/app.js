'use strict';
console.log('app.js file is connected');
let userName;
while(!userName){
  userName = prompt('Hello there!  You\'ve reached Mike Pace\'s About Me page.  What is your name?');
}
alert (userName + ', I hope you\'re ready for the most important questionnaire of your life!');


let answer1 = prompt('Was I born in Japan?').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y' || answer1 === 'ya' || answer1 === 'yeah') {
  alert('Wrong!');
}

if (answer1 === 'no' || answer1 === 'n' || answer1 === 'na' || answer1 === 'nah') {
  alert('How did you know?');
}
