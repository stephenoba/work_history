/**
  Its important that you keep practicing creating functions. Here are some more
  that you will need to implement

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

*/

// 1. write a function that takes a string as its first parameter. This function
// counts the number of vowels in the string and returns that number.
// EX1:
  // sample input: "Hello World"
  // sample output: 3

  function getVowels(str) {
  var vowelsCount = 0;
  var string = str.toString();
  for (var i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
getVowels('Hello World')

// 2. write a function that takes a string as it first parameter. This function
// return a new string with the first 3 letters lower-cased. If the string is less
// than 3 letters long, this function will return the new string with all letters
b// upper-cased.
// EX1:
  // sample input: "HELLO"
  // sample output: "helLO"
// EX2:
  // sample input: "he"
  // sample output: "HE"

  function changeCase(string) {
    if (string.length >= 3) {
  return string.slice(0, 3).toLowerCase() + string.slice(3).toUpperCase();
     } else if (string.length < 3) {
   return  string.toUpperCase();
  }
}
console.log(changeCase('Hello'));

// 3. write a function that takes a string as it first parameter. This function
// returns the first half of the string if the string is even length. Otherwise,
// it will return null;
// EX1:
  // sample input: "HelloWorld"
  // sample output: "Hello"
// EX2:
  // sample input: "Hello World"
  // sample output: null

  function printIfEven(string) {
    var n = string.length / 2
    if (string.length % 2 === 0) {
      return string.substr(0, n)
    } else if (string.length % 2 === 1) {
      return null
    }
  }
  console.log(printIfEven("HelloWorld"))

// 4. write a function that takes an array of numbers as its first parameter.
// This function returns the sum of the numbers in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 29

  function sumArray(array) {
  for (
    var
      index = 0,
      length = array.length,
      sum = 0;
      index < length;
      sum += array[index++]
  );
  return sum;
}

console.log(sumArray([1, 2, 3, 6, 9]))

// 5. write a function that takes an array of numbers as its first parameter.
// This function returns an the number that is the most frequent in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 1
