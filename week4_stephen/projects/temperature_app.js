// value for kelvin
const Kelvin = prompt('what is the temperature today?');

// convert kelvin to celsius
const Celsius = Kelvin - 273;

// convert celsius to fahrenheit
let Fahrenheit = Celsius * (9/5) + 32;

// round down fahrenheit
Fahrenheit = Math.floor(Fahrenheit)

// print the temperature in fahrenheit
console.log(`The temperature is ${Fahrenheit} degrees fahrenheit.`)
