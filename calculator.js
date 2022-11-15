const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');

function messages(message, lang='en') {
    return MESSAGES[lang][message];
  }

function prompt(key) {
    let message = messages(key, LANGUAGE);
    console.log(`=> ${message}`);
}

const readLine = require('readline-sync');

function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcome');

while (true) {

    prompt('firstNumber');
let number1 = readLine.question();

while (invalidNumber(number1)) {
    prompt('invalidInput');
    number1 = readLine.question();
}

prompt('secondNumber');
let number2 = readLine.question();

while (invalidNumber(number2)) {
    prompt('invalidInput');
    number2 = readLine.question();
}

prompt('operation');
let operation = readLine.question();

while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readLine.question();
}

console.log(`=> ${number1} ${number2}`);

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

prompt('result') + console.log(output);



prompt('anotherOperation');
let userAnswer = readLine.question();

if (userAnswer.toLowerCase() !== 'y') break;

};


