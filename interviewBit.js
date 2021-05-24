import { createInterface } from 'readline';

var rl = createInterface({
  input: process.stdin,
  output: process.stdout

});

console.log(parseInt(rl)+1)