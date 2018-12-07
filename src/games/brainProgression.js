import {
  gameEngine, greeting, getUserName, getRandomInt, showResult, makeProgression,
} from '..';
import { cons } from 'hexlet-pairs';

const brainProgression = () => {
  greeting('Find the greatest common divisor of given numbers.');
  const userName = getUserName();

  const roundGenerator = () => {
    const firstNumber = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);
    const hiddenNumber = getRandomInt(1, 10);
    const question = makeProgression(firstNumber, step, 10, hiddenNumber);

    const correctAnswer = firstNumber + (10 - hiddenNumber) * step;
    return cons(question, correctAnswer);
  };

  const result = gameEngine(3, roundGenerator);
  showResult(result, userName);
};
export default brainProgression;
