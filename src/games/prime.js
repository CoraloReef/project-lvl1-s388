import gameEngine from '..';
import { getRandomInt } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (counter) => {
    if (counter === 1) {
      return true;
    }
    return (num % counter) ? iter(counter - 1) : false;
  };
  return iter(num - 1);
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
