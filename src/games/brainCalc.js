import {
  gameEngine, greeting, getUserName, getRandomInt, getRandomOperation, resultExpression, showResult,
} from '..';
import { cons } from 'hexlet-pairs';

const brainCalc = () => {
  greeting('What is the result of the expression?');
  const userName = getUserName();

  const roundGenerator = () => {
    const firstNumber = getRandomInt(1, 20);
    const secondNumber = getRandomInt(1, 20);
    const operation = getRandomOperation();

    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const correctAnswer = resultExpression(firstNumber, secondNumber, operation);
    return cons(question, correctAnswer);
  };

  const result = gameEngine(3, roundGenerator);
  showResult(result, userName);
};
export default brainCalc;
