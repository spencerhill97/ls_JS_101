const readline = require('readline-sync');

const prompt = (message) => {
    console.log(`=> ${message}`);
}

const invalidNumber = (number) => {
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the loan calculator!");


while (true) {

prompt('What is the total dollar amount for the loan?');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
    prompt('Input error... please put in the dollar amount owed on the loan.');
    loanAmount = readline.question();
}

prompt('What is the total duration of the loan in months?');
let loanDuration = readline.question();

while (invalidNumber(loanDuration)) {
    prompt('Input error... please put in the total duration of the loan in months');
    loanDuration = readline.question();
}

prompt('What is the interest rate for the loan?');
let interestRate = readline.question();

while (invalidNumber(interestRate)) {
    prompt('Input error... please put in the interest rate for the loan.');
    interestRate = readline.question();
}

let annualInterestRate = interestRate / 100;
let monthlyInterestRate = annualInterestRate / 12;
let monthlyPayment = Number(loanAmount) * (monthlyInterestRate /
                     (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

prompt(`Your monthly payment for the requested loan is $${monthlyPayment.toFixed(2)}.`);

prompt('Another calculation?');
let answer = readline.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
}

if (answer[0] === 'n') break;

}













