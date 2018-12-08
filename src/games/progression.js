import gameEngine from '..';
import { getRandomInt, toString } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (firstNumber, step, length, hiddenPosition) => {
  if (length - 1 === 0) {
    return `${(hiddenPosition !== length) ? firstNumber : '..'}`;
  }
  return `${(hiddenPosition !== length) ? firstNumber : '..'} ${makeProgression(firstNumber + step, step, length - 1, hiddenPosition)}`;
};

const roundGenerator = () => {
  const firstNumber = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const hiddenPosition = getRandomInt(1, 10);
  const question = makeProgression(firstNumber, step, progressionLength, hiddenPosition);

  const correctAnswer = firstNumber + (progressionLength - hiddenPosition) * step;
  return cons(question, toString(correctAnswer));
};

const progression = () => {
  gameEngine(roundGenerator, description);
};

export default progression;
