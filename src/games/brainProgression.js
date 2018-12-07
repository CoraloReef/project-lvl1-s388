import gameEngine from '..';
import getRandomInt from '../utils';
import { cons } from 'hexlet-pairs';

const makeProgression = (start, step, length, hiddenNumber) => {
  if (length - 1 === 0) {
    return `${(hiddenNumber !== length) ? start : '..'}`;
  }
  return `${(hiddenNumber !== length) ? start : '..'} ${makeProgression(start + step, step, length - 1, hiddenNumber)}`;
};

const brainProgression = () => {
  const description = 'What number is missing in the progression?';

  const roundGenerator = () => {
    const firstNumber = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);
    const hiddenNumber = getRandomInt(1, 10);
    const question = makeProgression(firstNumber, step, 10, hiddenNumber);

    const correctAnswer = firstNumber + (10 - hiddenNumber) * step;
    return cons(question, correctAnswer);
  };

  gameEngine(roundGenerator, description);
};

export default brainProgression;
