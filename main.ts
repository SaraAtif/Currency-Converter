#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.bgGray.bold.italic("\n\t Welcome to Currency Converter by Sara \n"));

let exchangeRate: any ={
    "USD": 1, //Base currency
    "EUR": 0.9, //European currency
    "JYP": 113, //Japanese currency
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian Dollar
    "PKR": 277.70 // Pakistani Rupees
}

let userAnswer = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "Select the currency to convert from: ",
        type: "list",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "toCurrency",
        message: "Select the currency to convert into: ",
        type: "list",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount you want to convert: ",
        type: "input"
    }
]);

let from_currency = exchangeRate[userAnswer.fromCurrency];
let to_currency = exchangeRate[userAnswer.toCurrency];
let amount = userAnswer.amount;

let baseCurrency = amount / from_currency;
let convertedCurrency = baseCurrency * to_currency;
console.log(`Your converted currency amount: ${convertedCurrency.toFixed(2)}`);