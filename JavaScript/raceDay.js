let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let age = 18;

if (age >= 18 && earlyRegistration){
  raceNumber += 1000;
} 

if (age > 18 && earlyRegistration){
  console.log(`You will race at 9:30 AM. Your race number is: ${raceNumber}`);
} else if (age > 18 && !earlyRegistration){
  console.log(`You will race at 11:00 AM. Your race number is: ${raceNumber}`);
} else if (age < 18){
  console.log(`You will race at 12:30 PM. Your race number is: ${raceNumber}`);
} else {
  console.log('Please see the registration desk.');
}

