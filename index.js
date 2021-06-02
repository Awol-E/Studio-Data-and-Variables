// FORK this starter file and save it to your own Repl.it account.

// 1. Declare and assign the variables here:
const input =require('readline-sync');
let astronautCount =input.question('please enter astronautCount?');
astronautCount =Number(astronautCount);
let date ="Monday 2019-03-18";
let time ="10:05:34 AM";
let astronautStatus ="ready";
let averageAstronautMassKg =80.7 ;

let fuelMassKg =760000 ;
let shuttleMassKg =74842.31 ;
let fuelTempCelsius ="-225 C";
let fuelLevel ="100%";
let WeatherStatus ="clear";
let crewMassKg =astronautCount * averageAstronautMassKg ;
let totalMassKg =crewMassKg + fuelMassKg + shuttleMassKg;

let line='-------------------------------------';
// Write code to generate the LC04 report here:

console.log(line);
console.log('> LC04 -LAUNCH CHECKLIST');
console.log(line);
console.log('Date:' + date);
console.log('Time:' + time);
console.log('\t');
console.log(line);
console.log('> ASTRONAUT INFO');
console.log(line);
console.log('* count: ' + astronautCount);
console.log('* status: ' + astronautStatus);
console.log('\t');
console.log(line);
console.log('> FUEL DATA');
console.log(line);
console.log('* Fuel temp celsius: ' + fuelTempCelsius);
console.log('* Fuel level: ' + fuelLevel);
console.log('\t');
console.log(line);
console.log('> WEIGHT DATA');
console.log(line);
console.log('* Crew mass: ' + crewMassKg + ' kg');
console.log('* Fuel mass: ' + fuelMassKg + ' kg');
console.log('* Shuttle mass: ' + shuttleMassKg + ' kg');
console.log('* Total mass: ' + totalMassKg + ' kg');
console.log('\t');
console.log(line);
console.log('> FLIGHT PLAN');
console.log(line);
console.log('* weather: ' + WeatherStatus);
console.log('\t');
console.log(line);
console.log('> OVERALL STATUS');
console.log(line);
console.log('* Clear for takeoff: Yes');

// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

