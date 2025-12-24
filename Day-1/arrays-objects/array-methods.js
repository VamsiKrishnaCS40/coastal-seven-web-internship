const numbers = [1, 2, 3, 4, 5];

// map
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total:", total);
// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even Number:", firstEven);