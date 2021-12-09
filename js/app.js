'use strict';
console.log('app.js file is connected');
let userName;
while(!userName){
  userName = prompt('Hello there!  You\'ve reached Mike Pace\'s About Me page.  What is your name?');
}
alert (userName + ', I hope you\'re ready for the most important questionnaire of your life!');

let answer1 = prompt('Was I born in Japan?').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y' || answer1 === 'ya' || answer1 === 'yeah') {
  console.log('Wrong');
  alert('Wrong!');
}

if (answer1 === 'no' || answer1 === 'n' || answer1 === 'na' || answer1 === 'nah') {
  console.log('Correct');
  alert('How did you know?');
}

let answer2 = prompt('Am I in the witness protection program?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y' || answer2 === 'ya' || answer2 === 'yeah') {
  console.log('Wrong');
  alert('nu-uh!!');
}

if (answer2 === 'no' || answer2 === 'n' || answer2 === 'na' || answer2 === 'nah') {
  console.log('Correct');
  alert('Stop reading my mind!');
}

