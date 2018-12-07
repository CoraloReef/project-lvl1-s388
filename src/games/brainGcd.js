import {
  gameEngine, greeting, getUserName, getRandomInt, getGcd, showResult,
} from '..';
import { cons } from 'hexlet-pairs';

const brainGcd = () => {
  greeting('Find the greatest common divisor of given numbers.');
  const userName = getUserName();

  const roundGenerator = () => {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    const question = `${firstNumber} ${secondNumber}`;

    const correctAnswer = getGcd(cons(firstNumber, secondNumber));
    return cons(question, correctAnswer);
  };

  const result = gameEngine(3, roundGenerator);
  showResult(result, userName);
};
export default brainGcd;
