import { cons } from 'hexlet-pairs';

import gameEngine from '..';
import { getRandomInt, toString } from '../utils';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  switch (getRandomInt(1, 4)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};
const resultExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const roundGenerator = () => {
  const firstNumber = getRandomInt(1, 20);
  const secondNumber = getRandomInt(1, 20);
  const operation = getRandomOperation();

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = resultExpression(firstNumber, secondNumber, operation);
  return cons(question, toString(correctAnswer));
};

const calc = () => {
  gameEngine(roundGenerator, description);
};

export default calc;
