/**
  In this assessment, you will be creating new Javascript functions.
  Make sure to read the directions to build the functions carefully.
  You should use the below patterns to write your functions:
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

// 1. write a function that takes a number as a parameter and returns it as a
// string

// 2. write a function that takes a number as a parameter and returns that
// number subtracted by 1

// 3. write a function that takes a number as a parameter and returns that
// number added by 1

// 4. write a function that takes two number as its parameters and returns the
// addition of those two numbers

// 5. write a function that takes a number as its parameter and returns the
// squared of that number

// 6. write a function that takes a number and returns true if the number is odd
// and false if it is not

// 7. write a function that takes two strings as its parameters and returns the
// combination of those two strings

// 8. write a function that takes the radius of a circle a parameter and returns
// the Area of the circle.
// For this exercise π (pie) can equal `3.14`

// Answer #1
const toString = (num) => {
  if (num > 50) {
    console.log('Hello');
  } else if (num < 50) {
    console.log('Goodbye');
  } else if (Number.isNaN(num)) {
    console.log('Please input a number');
  } else {
    console.log('Try again!');
  }
}

// Answer #2
const decrement = (i) => {
  return i = --i;
}

// Answer #3
const decrement = (i) => {
  return i = ++i;
}

// Answer #4
const addition = (numOne, numTwo) => {
  return numOne + numTwo;
}

// Answer #5
const square = (num) => {
  return num * num;
}

// Answer #6
const isOdd = (num) => {
  return Math.abs(n % 2) == 1;
}

// Answer #7
const twoStrings = (str1, str2) => {
  return str1.concat(str2);
}

// Answer #8
const areaOfCircle = (raduis) => {
  π = 3.14;
  radiusSquare = radius * radius;
  return π * radiusSquare;
}
