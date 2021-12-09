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

let answer3 = prompt('Is my net handle Catdude?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y' || answer3 === 'ya' || answer3 === 'yeah') {
  console.log('Correct');
  alert('Have you been stalking me?');
}

if (answer3 === 'no' || answer3 === 'n' || answer3 === 'na' || answer3 === 'nah') {
  console.log('Wrong');
  alert('Shame, shame.');
}

let answer4 = prompt('Do I own a cat?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y' || answer4 === 'ya' || answer4 === 'yeah') {
  console.log('Wrong');
  alert('No, why would you say that!?');
}

if (answer4 === 'no' || answer4 === 'n' || answer4 === 'na' || answer4 === 'nah') {
  console.log('Correct');
  alert('Way to rub it in...');
}

let answer5 = prompt('Am I allergic to cats?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y' || answer5 === 'ya' || answer5 === 'yeah') {
  console.log('Correct');
  alert('Allergies, also known as Mike\'sbane.');
}

if (answer5 === 'no' || answer5 === 'n' || answer5 === 'na' || answer5 === 'nah') {
  console.log('Wrong');
  alert('I wish you were right.');
}

alert('Congratulations ' + userName + ', you might know some stuff, maybe.');
