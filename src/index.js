import readlineSync from 'readline-sync';

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

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameEven = (n) => {
  if (n === 0) {
    return true;
  }

  const question = getRandomInt(1, 20);

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return gameEven(n - 1);
  }
  return false;
};

const getResult = (result, userName) => {
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};


export const brainGames = () => {
  greeting();
  getUserName();
};

export const brainEven = () => {
  greeting('Answer "yes" if number even otherwise answer "no".');

  const userName = getUserName();
  const result = gameEven(3);
  getResult(result, userName);
};
