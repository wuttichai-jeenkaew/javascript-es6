function sum(...input) {
  // Start coding here !
  return input.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
