const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
console.log(carBrands);

const carYears = ["2010, 2012, 2015, 2018, 2020"];
console.log(carYears);

let carFuel = [" Gasoline"];
console.log(carFuel);

let decimalNumbers = [22.333];
console.log(decimalNumbers);

//Part-1 Arrays(Car brands)
// Task 1 ; accessing & Prooerties
console.log(carBrands[0]); // fist index car brand is Toyota
console.log(carBrands[4]); //last index car brand is Audi

console.log(carBrands.length); // length of carBRANDS array is 5

// Task 2: updating elements.

carBrands[1] = "Nissan";
console.log(carBrands); // updated car brand at index 1 is Nissan
carBrands[4] = "Mercedes";
console.log(carBrands); // updated car brand at index 4 is Mercedes
console.log(carBrands.length); // length of carBRANDS array is 5

//task 3: Mutator Methods.
carBrands.push("Lexus");
console.log(carBrands);

carBrands.pop();
console.log(carBrands);

carBrands.shift();
console.log(carBrands);

carBrands.unshift("Kia");
console.log(carBrands);

carBrands.reverse();
console.log(carBrands);

carBrands.sort();
console.log(carBrands);

//Task 4 ; Finder Methods.

console.log(carBrands.indexOf("Toyota")); // toyota is not in th array.

console.log(carBrands.indexOf("BMW")); // BMW is at index 0

console.log(carBrands.lastIndexOf());

//Task 5; Joiner.
const carBrandsString = carBrands.join(", ");

console.log(carBrandsString);

const str = "ENGINE";
const chars = Array.from(str);
console.log(chars); // ['E', 'N', 'G', 'I', 'N', 'E']

//Part 2 Strings manipulation
//Task 6 :clean a string
let myString = "  What't up, Kaung Myat!   ";
console.log(myString);
console.log(myString.trim());
console.log(myString.length);

//Task 7; case & Accessing
let greeting = "Howdee!";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting[6]);

//Task 8: Slicing & Replacing
let text = "TojTech!";
console.log(text.slice(0, 3));
console.log(text.slice(3, 8));
console.log(text.replace("TojTech", "JavaScript"));

//Task 9: Searching Methods

const sentence =
  "I have two cars,one is electric car and the other is a gas car.";
console.log(sentence.includes("car")); // true
console.log(sentence.indexOf("electric car")); // 23
console.log(sentence.endsWith("gas car.")); // true

//Task 10: Splitting & Concat
let sentence1 = "I love";
let sentence2 = "Nature";
console.log(sentence1.concat(" "), sentence2);

// Task 11: Template Literals
const myCar = "Jeep Wrangler";
const myCarYear = 2022;
const myCarAge = 5;
console.log(
  `One of my car is  ${myCar} and it was ${myCarYear} model.She is ${myCarAge} years young and still runing .`,
);

//Part 3; Numbers
// Task 12: Rounding

let decimalNumber = 7.65;
console.log(Math.round(decimalNumber)); // 8

console.log(Math.floor(decimalNumber)); // 7

console.log(Math.ceil(decimalNumber)); // 8

console.log(Math.trunc(decimalNumber)); // 7

//Task 13: Formatting .

let num = 1234.56789;
console.log(num.toFixed(2)); // "1234.57"

//Task 14: Conversion

let strNum = " 10 ";
let convertedNum = Number(strNum);
console.log(convertedNum);

let anotherStrNum = " 20.5 ";
let anotherConvertedNum = parseInt(anotherStrNum);
console.log(anotherConvertedNum);

let floatNumStr = " 30.75 ";
let floatConvertedNum = parseFloat(floatNumStr);
console.log(floatConvertedNum);

//Task 15: Checking
let Number1 = 15;
console.log(isNaN("Hey There!")); // true
console.log(isNaN(Number1)); // false
console.log(Number.isInteger(15)); // true

//Task 16: Math Utilities

let numbersArray = [5, 10, 3, 8, 2];
console.log(Math.abs(10));

console.log(Math.min(...numbersArray));

console.log(Math.max(...numbersArray));

console.log(Math.pow(2, 3));

console.log(Math.sqrt(10));

//Task 17; Random Numbers

console.log(Math.random()); // random number between 0 and 1

console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

// Finsl MINI CHALLENGE

let myCaris = " I have Honda SUV! ";

console.log(myCaris.trim().toUpperCase().replace("HONDA", "TOYOTA"));
console.log(myCaris.slice(7, 20).toLowerCase());
console.log(myCaris.length);
