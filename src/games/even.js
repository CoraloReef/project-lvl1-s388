import gameEngine from '..';
import { getRandomInt } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;

const roundGenerator = () => {
  const question = getRandomInt(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const even = () => {
  gameEngine(roundGenerator, description);
};

export default even;
