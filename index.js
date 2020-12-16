var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ' );
console.log("Welcome "+ userName + " Let's see how well you know Ironman ");
var score = 0;

function playQuiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log('You are Right');
    score++;
    console.log('Your score is ', score);
  }
  else{
    score--;
    console.log('You are wrong ');
    console.log('Your score is ', score);
  }
}

var questions = [
  question1 = {
    question :'What is Iron Man alter ego ? ',
    answer: 'Tony'
  },
  question2 = {
    question:"What is Tony Stark's business empire called ",
    answer : 'Strak Industries'
  },
  question3 = {
    question:"What is the name of Tony Stark's love interest? ",
    answer : 'Pepper Potts'
  },
  question4 = {
    question:"What's the name of Iron Man's computer system? ",
    answer : 'Jarvis'
  },
  question5 = {
    question:'Who did Iron Man face off against in Civil War? ',
    answer : 'Captin America'
  }

];

for(let i =0; i< questions.length; i++){
  playQuiz(questions[i].question, questions[i].answer);
}


console.log('Your final score is ', score );
