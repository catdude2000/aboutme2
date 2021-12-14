
function questionSev(){
  let answer7 = prompt('Can you name one of my brothers?').toLowerCase();
  console.log('user input', answer7);
  // for(let i = 0; i <answers.length; i++);
  let tries2 = 0;
  let answers = ['david', 'tom', 'chris'];
  while (tries2 < 5) {
    for(let i = 0; i <answers.length; i++){ 
    if(answer7 === answers[i]) {
      alert('youre right');
      tries2 = tries2 + 1;
    } else{
      alert('your wrong');
      tries2 = tries2 + 1;
    }
    }
    alert('you got x right');
  }
  // (answer7 !== answers[i] && tries2 < 5) {
    // for(let i = 0; i <answers.length; i++);
  //   tries2 = tries2 + 1;
  //   answer7 = prompt('Sorry but no, try again.').toLowerCase();
  // }
  
  // while (answer7 == answers[i]){
  //   alert('You are correct!');
  //   points += 1;
  //   break;
  }
  while (tries2 === 5 || answer7 === answers[i]) {
    alert('Their names are David, Tom and Chris');
    console.log(userName + ' has ' + points + ' points');
    break;
  }
  console.log('tries', tries2);
}

questionSev();

console.log('points', points);

alert(userName + ', you got ' + points + ' out of 7!');
