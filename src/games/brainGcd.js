import gameEngine from '..';
import getRandomInt from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const getGcd = (pair) => {
  if (cdr(pair) === 0) {
    return car(pair);
  }
  return getGcd(cons(cdr(pair), car(pair) % cdr(pair)));
};

const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const roundGenerator = () => {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    const question = `${firstNumber} ${secondNumber}`;

    const correctAnswer = getGcd(cons(firstNumber, secondNumber));
    return cons(question, correctAnswer);
  };

  gameEngine(roundGenerator, description);
};

export default brainGcd;
