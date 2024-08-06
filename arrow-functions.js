/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a+b;
}
let sum = addTwoNumbers(5, 3);
console.log(sum);

// Arrow Function With Parameters

const addTwoOtherNumbers = (a, b) => {
    return a+b;
}
let sum2 = addTwoOtherNumbers(10, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters

const addMoreNumbers = (a, b) => a + b;
let sum3 = addMoreNumbers(14, 6);
console.log(sum3);

// Implicit Returns

// Returning Multiple Lines
