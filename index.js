// Function using arrow syntax with two parameters and implicit return
const add = (a, b) => a + b;

// Arrow function with a single parameter and implicit return
const square = n => n * n;

// Arrow function with one parameter and explicit return (for multi-line body)
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Arrow function with no parameters
const sayHello = () => "Hello there!";

// Using arrow function in .map() to double each element
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

// Divide function using arrow syntax
const divide = (a, b) => a / b;

// Rewriting previous lab functions using arrow syntax
const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`;