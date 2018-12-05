#!/usr/bin/env node

import {
  greeting, getUserName, gameEven, getResult,
} from '..';

greeting('Answer "yes" if number even otherwise answer "no".');

const userName = getUserName();
const result = gameEven(3);

getResult(result, userName);
