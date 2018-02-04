/**
  In this assessment, you will use your knowledge of javascript arrays
  to complete the functions below.

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

  ```
*/

// 1. write a function that takes an array as its first parameter and returns
// the first item in the array

let numbers = [32, 65, 51, 23, 7];

function firstNumber(numbers) {
  return numbers
}

console.log(firstNumber(numbers[0]));

// 2. write a function that takes an array as its first parameter and returns
// the last item in the array

let numbers = [32, 65, 51, 23, 7];

function firstNumber(numbers) {
  return numbers
};

console.log(firstNumber(numbers[4]));

// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.

let numbers = [32, 65, 51, 23, 7];

function newArray(numbers, newValue) {
  number = numbers.unshift(newValue)
  return numbers;
}

console.log(newArray(numbers, 59));

// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.

let numbers = [32, 65, 51, 23, 7];

function newArray(numbers, newValue) {
  numbers = numbers.push(newValue)
  return numbers;
}

console.log(newArray(numbers, 59));
console.log(numbers);

// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.

let numbers = [32, 65, 51, 23, 7];

function newArray(numbers, index, newValue) {
  numbers = numbers.splice(index, 0, newValue)
  return numbers;
}

console.log(newArray(numbers, 2, 35));
console.log(numbers)
