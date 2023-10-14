const readline = require('readline-sync');
const MESSAGES = require('./messages.json');
let defaultLanguage = 'en';

function messageLanguage(message, lang) {
  return MESSAGES[lang][message];
}

function prompt(messageKey, output = '') {
  let messageLangKey = messageLanguage(messageKey, defaultLanguage);
  console.log(`=> ${messageLangKey}${output}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcomeMessage');
prompt('chooseLanguage');
let languageChoiceEntry = readline.question();
while (invalidNumber(languageChoiceEntry)) {
  prompt('invalidNumber');
  languageChoiceEntry = readline.question();
}
while (!['1', '2', '3'].includes(languageChoiceEntry)) {
  prompt('invalidOperation');
  languageChoiceEntry = readline.question();
}
switch (languageChoiceEntry) {
  case '1':
    defaultLanguage = 'en';
    break;
  case '2':
    defaultLanguage = 'es';
    break;
  case '3':
    defaultLanguage = 'ms';
    break;
}

while (true) {
  prompt('enterFirstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('enterSecondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('chooseOperation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt('resultMessage', `${output}`);
  prompt('anotherOperation');
  let answer = readline.question();

  if (answer !== 'y') break;
}

