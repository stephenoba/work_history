/**
  In this assessment, you will use your knowledge of javascript loops
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

// 1. write a function that takes an array as its first parameter and console logs
// every item in the array

let states = ['Ogun', 'Delta', 'Edo', 'Anambra', 'Imo', 'Rivers', 'Bauchi', 'Bayelsa'];

function nigeriaStates(states) {
  for (let statesIndex = 0; statesIndex < states.length; statesIndex++) {
    console.log(states[statesIndex]);
  }
}

nigeriaStates(states)

// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index

let states = ['Ogun', 'Delta', 'Edo', 'Anambra', 'Imo', 'Rivers', 'Bauchi', 'Bayelsa'];

function oddStatesIndex(states) {
  for (let statesIndex = 0; statesIndex < states.length; statesIndex+=2) {
    console.log(states[statesIndex]);
  }
}

oddStatesIndex(states)

// 3. write a function that takes an array as its first parameter and console logs
// every item with #an even index

let states = ['Ogun', 'Delta', 'Edo', 'Anambra', 'Imo', 'Rivers', 'Bauchi', 'Bayelsa'];

function evenStatesIndex(states) {
  for (let statesIndex = 1; statesIndex < states.length; statesIndex+=2) {
    console.log(states[statesIndex]);
  }
}

evenStatesIndex(states)

// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not

let states = ['Ogun', 'Delta', 'Plateau', 'Anambra', 'Imo', 'Kaduna', 'Bauchi', 'Enugu'];
let searchValue = 'Enugu';

function southSouthStates(states) {
  while (searchValue !== 'Delta') {
  console.log(searchValue);
  searchValue = states[Math.floor(Math.random() * 8)]
}
console.log('true');
}

southSouthStates(states)

// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.

let states = ['Ogun', 'Delta', 'Edo', 'Anambra', 'Imo', 'Rivers', 'Bauchi', 'Bayelsa'];

function replaceAll(states, replaceValue) {
  let i = states.length;
  while (i--) {
    states[i] = replaceValue;
  }
  console.log(states)
}

replaceAll(states, 'Kastina')

// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.

let states = ['Ogun', 'Delta', 'Edo', 'Anambra', 'Imo', 'Rivers', 'Bauchi', 'Bayelsa'];
let searchValue = 'Delta';

function replaceItem(states, searchValue, replaceValue) {
  for (let statesIndex = 0; statesIndex < states.length; statesIndex++) {
      if (states[statesIndex] === searchValue) {
        states[statesIndex] = replaceValue;
      }
  }
  console.log(states)
}

replaceItem(states, 'Edo', 'Kastina')
