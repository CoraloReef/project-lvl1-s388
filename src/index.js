import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfQuestions = 3;

const gameEngine = (generator, description) => {
  console.log(description);
  console.log();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionAnswer = generator();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      iter(counter - 1);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(numberOfQuestions);
};

export default gameEngine;
