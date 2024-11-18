let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true; // Change this value to test different scenarios

let age = 25; 


if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30 pm.`);
} else {
  console.log(`Runner ${raceNumber} should see the registration desk.`);
}
