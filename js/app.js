'use strict';
console.log('app.js file is connected');

// let points = 0;

// let userName = prompt('Hello there!  You\'ve reached Mike Pace\'s About Me page.  What is your name?');
// while (!userName) {
//   userName = prompt ('Enter your name, please.');
// }

// alert(userName + ', I hope you\'re ready for the most important questionnaire of your life!');

// function questionOne(){
//   let answer1 = prompt('Was I born in Japan?').toLowerCase();

//   if (answer1 === 'yes' || answer1 === 'y' || answer1 === 'ya' || answer1 === 'yeah') {
//     console.log('Wrong');
//     alert('Wrong!');
//   }

//   if (answer1 === 'no' || answer1 === 'n' || answer1 === 'na' || answer1 === 'nah') {
//     console.log('Correct');
//     alert('How did you know?');
//     points += 1;
//     console.log(userName + ' has ' + points + ' points');
//   }
// }

// questionOne();

// console.log('points', points);

// function questionTwo(){
//   let answer2 = prompt('Am I in the witness protection program?').toLowerCase();

//   if (answer2 === 'yes' || answer2 === 'y' || answer2 === 'ya' || answer2 === 'yeah') {
//     console.log('Wrong');
//     alert('nu-uh!!');
//   }

//   if (answer2 === 'no' || answer2 === 'n' || answer2 === 'na' || answer2 === 'nah') {
//     console.log('Correct');
//     alert('Stop reading my mind!');
//     points += 1;
//     console.log(userName + ' has ' + points + ' points');
//   }
// }

// questionTwo();

// console.log('points', points);

// function questionThree(){

//   let answer3 = prompt('Is my net handle Catdude?').toLowerCase();

//   if (answer3 === 'yes' || answer3 === 'y' || answer3 === 'ya' || answer3 === 'yeah') {
//     console.log('Correct');
//     alert('Have you been stalking me?');
//     points += 1;
//     console.log(userName + ' has ' + points + ' points');
//   }

//   if (answer3 === 'no' || answer3 === 'n' || answer3 === 'na' || answer3 === 'nah') {
//     console.log('Wrong');
//     alert('Shame, shame.');
//   }
// }

// console.log('points', points);

// questionThree();

// function questionFour(){
//   let answer4 = prompt('Do I own a cat?').toLowerCase();

//   if (answer4 === 'yes' || answer4 === 'y' || answer4 === 'ya' || answer4 === 'yeah') {
//     console.log('Wrong');
//     alert('No, why would you say that!?');
//   }

//   if (answer4 === 'no' || answer4 === 'n' || answer4 === 'na' || answer4 === 'nah') {
//     console.log('Correct');
//     alert('Way to rub it in...');
//     points += 1;
//     console.log(userName + ' has ' + points + ' points');
//   }
// }

// questionFour();

// console.log('points', points);

// function questionFive(){
//   let answer5 = prompt('Am I allergic to cats?').toLowerCase();

//   if (answer5 === 'yes' || answer5 === 'y' || answer5 === 'ya' || answer5 === 'yeah') {
//     console.log('Correct');
//     points += 1;
//     alert('Allergies, also known as Mike\'s-bane.');
//     console.log(userName + ' has ' + points + ' points');
//   }

//   if (answer5 === 'no' || answer5 === 'n' || answer5 === 'na' || answer5 === 'nah') {
//     console.log('Wrong');
//     alert('I wish you were right.');

//   }
// }

// questionFive();

// console.log('points', points);

// function questionSix() {
//   let answer6 = prompt ('How old am I?');

//   let tries = 0;

//   while (answer6 < '31' && tries < 3) {
//     console.log(answer6);
//     tries = tries + 1;
//     answer6 = prompt ('Try a little higher.');
//   }

//   while (answer6 > '31' && tries < 3) {
//     console.log(answer6);
//     tries = tries + 1;
//     answer6 = prompt ('Try a little lower');
//   }
//   while (answer6 < '31' && tries < 3) {
//     console.log(answer6);
//     tries = tries + 1;
//     answer6 = prompt ('Try a little higher.');
//   }

//   while (answer6 > '31' && tries < 3) {
//     console.log(answer6);
//     tries = tries + 1;
//     answer6 = prompt ('Try a little lower');
//   }
//   while (tries === 3) {
//     alert ('I\'m 31');
//     console.log(userName + ' has ' + points + ' points');
//     break;
//   }
//   while (answer6 === '31') {
//     console.log(answer6);
//     alert (answer6 + ' and proud of it!');
//     points += 1;
//     console.log(userName + ' has ' + points + ' points');
//     break;
//   }
//   console.log('tries', tries);
// }

// questionSix();

// console.log('points', points);

// function questionSev(){
//   let answer7 = prompt('Can you name one of my brothers?');
//   console.log('user input', answer7);

//   let tries2 = 0;
//   let answers ='David' || 'Tom' || 'Chris';
//   while(answer7 !== answers && tries2 < 5) {
//     tries2 = tries2 + 1;
//     answer7 = prompt('Sorry but no, try again.');
//   }
//   while(answer7 === answers){
//     alert('You are correct!');
//     points += 1;
//     break;
//   }
//   while (tries2 === 5 || answer7 === answers) {
//     alert('Their names are David, Tom and Chris');
//     console.log(userName + ' has ' + points + ' points');
//     break;
//   }
//   console.log('tries', tries2);
// }

function questionSev(){
  let tries2 = 0;
  let answers = ['david', 'tom', 'chris'];
  console.log(answers);
  let answer7 = prompt('Can you name one of my brothers?').toLowerCase();
  console.log('user input', answer7);
  for(let i = 0; i < answers.length; i++)
  {
    while (tries2 < 5) {
      if(answer7 === answers[i]) {
        alert('That\'s correct!');
        // points += 1;
        alert('Their names are David, Tom, and Chris');
        tries2 = tries2 + 6;
        break;
      }
      if (answer7 !== answers[i]) {
        answer7 = prompt('Sorry, try again.');
        tries2 = tries2 + 1;
      }
      if(tries2 === 5) {
        alert('Their names are David, Tom, and Chris');
        break;
      }
    }
  }
}
questionSev();

// console.log('points', points);

// alert(userName + ', you got ' + points + ' out of 7!');
