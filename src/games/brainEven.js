import {
  gameEngine, greeting, getUserName, getRandomInt, isEven, showResult,
} from '..';
import { cons } from 'hexlet-pairs';

const brainEven = () => {
  greeting('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();

  const roundGenerator = () => {
    const question = getRandomInt(1, 20);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };

  const result = gameEngine(3, roundGenerator);
  showResult(result, userName);
};
export default brainEven;
