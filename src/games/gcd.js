import gameEngine from '..';
import { getRandomInt, toString } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const roundGenerator = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = getGcd(firstNumber, secondNumber);
  return cons(question, toString(correctAnswer));
};

const gcd = () => {
  gameEngine(roundGenerator, description);
};

export default gcd;
