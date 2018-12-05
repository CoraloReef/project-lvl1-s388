import readlineSync from 'readline-sync';

export const greeting = (description) => {
  console.log('Welcome to the Brain Games!');

  if (description !== undefined) {
    console.log(description);
    console.log();
  }
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  return userName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameEven = (n) => {
  if (n === 0) {
    return true;
  }

  const number = getRandomInt(1, 20);

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    return gameEven(n - 1);
  }
  return false;
};

export const getResult = (result, userName) => {
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
