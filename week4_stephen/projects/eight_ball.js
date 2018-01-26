let userName = 'Stephen Oba';

userName ? console.log('Hello, ' + userName + '.') : console.log('Hello!');

let userQuestion = 'what is the answer?';
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'it is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = "don't count on it";
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'signs point to yes';
    break;
 }

console.log(userQuestion);
console.log(eightBall);
