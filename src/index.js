import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = n => n % 2 === 0;

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

const gameEven = (n, userName) => {
  if (n === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const question = getRandomInt(1, 20);

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    gameEven(n - 1, userName);
    return;
  }
  console.log(`Let's try again, ${userName}!`);
};

export const brainGames = () => {
  greeting();
  getUserName();
};

export const brainEven = () => {
  greeting('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();
  gameEven(3, userName);
};
