import gameEngine from '..';
import getRandomInt from '../utils';
import { cons } from 'hexlet-pairs';

const isEven = n => n % 2 === 0;

const brainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const roundGenerator = () => {
    const question = getRandomInt(1, 20);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };

  gameEngine(roundGenerator, description);
};

export default brainEven;
