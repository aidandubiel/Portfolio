let myAge = 18;

// Number of years to multiply by 10.5
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

// Subtract first 2 years since we accounted for it already
let laterYears = myAge - 2;

// Multiply by dog years
laterYears = laterYears * 4;

// Output to console
console.log(earlyYears);
console.log(laterYears);

// Adds the early years and the later years for total
 let myAgeInDogYears = earlyYears + laterYears;

// Adds a variable to store my name
 const myName = 'Aidan'.toLowerCase();

// Output to display all variables
 console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears}.`);
