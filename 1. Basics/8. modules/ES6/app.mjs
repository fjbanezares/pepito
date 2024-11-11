// Named imports
import { add, subtract } from './mathOps.mjs';
// or use package.json

// Default import
import multiply from './mathOps.mjs';

console.log(add(5, 3));      // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2
console.log(multiply(5, 3)); // Outputs: 15
