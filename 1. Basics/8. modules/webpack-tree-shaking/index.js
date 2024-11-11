// index.js
import { add, subtract } from './mathFunctions';

console.log(add(2, 3));       // Outputs: 5
console.log(subtract(5, 2));  // Outputs: 3


import('./mathFunctions').then(module => {
    console.log(module.multiply(2, 3)); // Outputs: 6
});