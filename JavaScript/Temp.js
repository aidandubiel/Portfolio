// Today's forcast in kelvin
const kelvin = 0;


// Kelvin converted to Celsius variable
let celsius = kelvin - 273;

// Celsius converted to Fahrenheit variable rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

// Celsius converted to Newton variable
let Newton = Math.floor(celsius * (33/100));


// Output
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

console.log(`The temperature is ${Newton} degrees Newton`);
