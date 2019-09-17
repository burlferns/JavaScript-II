console.log("******************************THIS IS THE MVP OUTPUT OF CLOSURE.JS**********");

// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function outer() {
  let myVariable = 10;

  function inner() {
    myVariable=myVariable+5;
  }

  console.log(`Inside the outer function and the value of myVariable is ${myVariable} before calling the inner function`)

  inner(); //call the inner function

  console.log(`Inside the outer function and the value of myVariable is ${myVariable} after calling the inner function`)

}
outer(); //call the outer function


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

console.log("******************************THIS IS THE STRETCH OUTPUT OF CLOSURE.JS**********");

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count=0;
  function counter() {
    count=count+1;
    return count;
  }
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();
console.log(`First run of myCounter() gives a result of ${myCounter()}`); // 1
console.log(`Second run of myCounter() gives a result of ${myCounter()}`); // 2
console.log(`Third run of myCounter() gives a result of ${myCounter()}`);


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker_limit = () => {
  let count=0;
  const limit=4;
  function counter() {
    count=count+1;
    if(count===limit) {
      count=1;
    }
    return count;
  }
  return counter;
};
const myCounter_limit = counterMaker_limit();
for(let i=0;i<8;i++) {
  console.log(`Run number:${i+1},  Output of myCounter_limit() is:${myCounter_limit()}`); 
}



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count=0;

  let myInsideObject = {
    increment: () => ++count,
    decrement: () => --count
  };

  return myInsideObject;
};

const myObj = counterFactory();
for(let i=0;i<5;i++) {
  console.log(`Run number:${i+1},  Output of myObj.increment() is:${myObj.increment()}`); 
}
for(let i=0;i<3;i++) {
  console.log(`Run number:${i+1},  Output of myObj.decrement() is:${myObj.decrement()}`); 
}
