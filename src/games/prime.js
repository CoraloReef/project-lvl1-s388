import { cons } from 'hexlet-pairs';

import gameEngine from '..';
import { getRandomInt } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  const iter = (counter) => {
    if (counter === num) {
      return true;
    }
    return (num % counter) ? iter(counter + 1) : false;
  };
  return iter(2);
};

const roundGenerator = () => {
  const question = getRandomInt(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const prime = () => {
  gameEngine(roundGenerator, description);
};

export default prime;
