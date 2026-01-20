// 1. string

const name = "Kaung";
const myLastName = "MyatThu";
// single Quot but getting convrted to double quotes on saved.

console.log(name);
console.log(myLastName);

//2. Numbers

const birthYear = 1991;
const carModel = 2025;
const studentScore = 90.6;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

// 3. Boolean.

// The Light is off when you enter the room

let isLightOn = false;
console.log("IS the light on?", isLightOn);

// Later, someone comes and turn on the light

isLightOn = true;
console.log("Is the light on?", isLightOn);

// 4. Null

//In the assigned seats in a party, it is 4pm nobody has arrived so it is null.

let seatOwner = null;
console.log("Seat status;", seatOwner);

// party starts at 5pm,The seagt has an owner now

seatOwner = "KMT";
console.log("Seat status;", "KMT");

// 5. Undefined

// Before teacher checking attendance

let studentPresent;
console.log("student present", studentPresent);

//Later teacher after checking attendance

studentPresent = "YES";
console.log("student present", studentPresent);

// 6 arrays (NOn-primitive - MUTABLE) ->Square Brackets

//Make your variables name descriptive,try to use sam data type.
const colors = ["red", "green", "blure"];
console.log("colors");

const studrentScores = [70, 85, 88, 95];
console.log(studrentScores);

//NOt Recommened for arrays!!! - Array that has all kind of data types
const array = ["John", 39, true];
console.log(array);

//7. objevt (non- primitive - MUTABLE )--> curly braces

//Left side inside curly braces is "Keys" and the right side is "values"

const person = {
  name: "Zion",
  age: 1,
  isStudent: false,
  isInCA: true,
};

console.log(person);

let Actor = {
  name: "leonado",
  age: 55,
  Actor: true,
  country: {
    countryName: "USA",
    city: "california",
    zipCode: 93333,
  },
};

//Accessing a key in an object
console.log(persontwo);
