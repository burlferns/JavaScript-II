// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

console.log("******************************THIS IS THE MVP OUTPUT OF CALLBACKS.JS**********");

//********************* First problem
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length); 
}

const test_getLength = getLength(items, (len) => {
  return `The length of the items array is ${len}`;
});

console.log(test_getLength);

//********************* Second problem
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let indexLast=arr.length-1;
  return cb(arr[indexLast]); 
}

const test_last = last(items, (elem) => { 
  return `The last item in the items array is ${elem}`;
});

console.log(test_last);

//********************* Third problem
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let addResult = x+y;
  return cb(addResult);
}

const test_sumNums = sumNums(3,4, (num) => `The result of the sum of 3 & 4 is ${num}`);

console.log(test_sumNums);

//********************* Fourth problem
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multResult = x*y;
  return cb(multResult);
}

const test_multiplyNums = multiplyNums(7,2, (num) => `The result of the multiplication of 7 & 2 is ${num}`);

console.log(test_multiplyNums);

//********************* Fifth problem
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let isPresent=false;
  for(let i=0;i<list.length;i++) {
    if(list[i]===item) {
      isPresent=true;
    }
  }
  return cb(isPresent);  
}

const testTrue_contains = contains('Notebook', items, (result)=>`Notebook is in the items array: ${result}`); 
console.log(testTrue_contains);
const testFalse_contains = contains('Ball', items, (result)=>`Ball is in the items array: ${result}`); 
console.log(testFalse_contains);



//********************* STRETCH PROBLEM 

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
