// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myName = "Josh";

function sayHello() {
  let example = "jim";
  // accessing myName outside this function
  return `Hello ${myName}`;
}
console.log(sayHello());

// console.log(example);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => ++count;
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); // 1
newCounter(); // 2
newCounter(); // 3
newCounter(); // 4
newCounter(); // 5

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment()); // 1
console.log(newCounterFactory.decrement()); // 0
console.log(newCounterFactory.decrement()); // -1
console.log(newCounterFactory.decrement());
