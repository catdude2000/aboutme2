
function questionSev(){
  let answer7 = prompt('Can you name one of my brothers?').toLowerCase();
  console.log('user input', answer7);
  let tries2 = 0;
  let answers = ['david', 'tom', 'chris'];
  while (tries2 < 5) {
    for(let i = 0; i <answers.length; i++){ 
      if(answer7 === answers[i]) {
        alert('That\'s correct!');
      } else{
        alert('Sorry, try again.');
        tries2 = tries2 + 1;
      }
    }
  }

  questionSev();

console.log('points', points);

alert(userName + ', you got ' + points + ' out of 7!');
