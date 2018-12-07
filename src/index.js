import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const toString = n => `${n}`;

const gameEngine = (generator, description) => {
  console.log(description);
  console.log();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  const iter = (counter, acc) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionAnswer = generator();
    console.log(`Question: ${car(questionAnswer)}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === toString(cdr(questionAnswer))) {
      console.log('Correct!');
      iter(counter - 1, acc);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(3, generator);
};

export default gameEngine;
