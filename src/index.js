import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
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
const isEven = n => n % 2 === 0;
const getGcd = (pair) => {
  if (cdr(pair) === 0) {
    return car(pair);
  }
  return getGcd(cons(cdr(pair), car(pair) % cdr(pair)));
};
const makeProgression = (start, step, length, hiddenNumber) => {
  if (length - 1 === 0) {
    return `${(hiddenNumber !== length) ? start : '..'}`;
  }
  return `${(hiddenNumber !== length) ? start : '..'} ${makeProgression(start + step, step, length - 1, hiddenNumber)}`;
};
const toString = n => `${n}`;

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');

  if (description !== undefined) {
    console.log(description);
    console.log();
  }
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  return userName;
};

const showResult = (result, userName) => {
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const gameEngine = (n, generator) => {
  if (n === 0) {
    return true;
  }
  const questionAnswer = generator();
  console.log(`Question: ${car(questionAnswer)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === toString(cdr(questionAnswer))) {
    console.log('Correct!');
    return gameEngine(n - 1, generator);
  }
  return false;
};

export {
  gameEngine,
  getUserName,
  greeting,
  isEven,
  resultExpression,
  getRandomOperation,
  getRandomInt,
  showResult,
  getGcd,
  makeProgression,
};
