import { cons } from 'hexlet-pairs';

import gameEngine from '..';
import { getRandomInt, toString } from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (firstNumber, step, length, hiddenPosition) => {
  const iter = (counter, acc) => {
    if (counter === length) {
      return `${(hiddenPosition !== counter) ? acc : '..'}`;
    }
    return `${(hiddenPosition !== counter) ? acc : '..'} ${iter(counter + 1, acc + step)}`;
  };
  return iter(1, firstNumber);
};

const roundGenerator = () => {
  const firstNumber = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const hiddenPosition = getRandomInt(1, 10);
  const question = makeProgression(firstNumber, step, progressionLength, hiddenPosition);

  const correctAnswer = firstNumber + (hiddenPosition - 1) * step;
  return cons(question, toString(correctAnswer));
};

const progression = () => {
  gameEngine(roundGenerator, description);
};

export default progression;
