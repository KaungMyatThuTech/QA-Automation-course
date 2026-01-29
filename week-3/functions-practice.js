let carBrands = ["Jeep", "Ford", "GMC"];
let num = [20, 22, 23];
let carEngine = "  Made in USA cars !";
let decimalNumber = 2020.2026;

// Part 1: String + Functions
//Task 1 : Clean & Format text

function clean() {
  console.log(carEngine.trim().toLowerCase());
}
clean(carEngine);
//task 2; First & Last Character

function firstAndLast(home) {
  let clean1 = "home";
  let firstC = clean1[0];
  let lastC = clean1[(clean1[4], clean1.length)];
  return console.log(firstC + lastC);
}
firstAndLast();

//task 3: Word Counter

function word(length) {
  let string = "home";
  return console.log(string.split(""), string.length);
}
word();

//Part 2: Srray_Functions
//Task 4 : Brand Checker

function brandChecker(brandsArray, brandSearch) {
  let carBrands = ["Jeep", "Ford", "GMC"];

  if ("Jeep") {
    console.log("Brand exists");
  } else {
    console.log("Brand not found");
  }
}
brandChecker();
//Task 5: Get Last Brand
function getLastBrand(lastSport) {
  let carBrands1 = ["Jeep", "Ford", "GMC"];

  console.log(carBrands1.at(-1));
}
getLastBrand();

// task 6 :Format Brands List
function brandList(singleString) {
  let carBrands1 = ["Jeep", "Ford", "GMC"];
  console.log(carBrands1.join(","));
}
brandList();

//Part 3: Number+Functions
//Task 7: Safe Rounding

function safeRounding(isNaN) {
  let number = 14.8;
  if ((number = 14.8)) {
    console.log(Math.round(14.8));
  } else (number = "Hi") => console.log(isNaN("Hi"));
}
safeRounding();

//Task 8 Price Comparison

function priceComparison(equal, higher) {
  if (5000 === 5005) {
    console.log("Prices are equal");
  } else if (5000 > 5005) {
    console.log("first is higher");
  } else 5000 < 5005;
  console.log("second is higher");
}
priceComparison();

//Task 9 : Randonm Whole Number

function RandomNum(Num, random) {
  console.log(Math.floor(Math.random() * 10) + 1); // if without *10 only get 0.0 to 1.If I add  10 it will give possible random 10 numbers .
}
RandomNum();

//Part 4: Conditional Thinking
//Task 10:Budget Check
function BudgetCjeck(Hight, low) {
  let carPrice = 25000;
  let userBudge = 2000;
  if (carPrice <= userBudge) {
    console.log("over budget");
  } else if (carPrice === userBudge) {
    console.log("within budget");
  } else carPrice > userBudge;
  console.log("Invalid Input");
}
BudgetCjeck();

//Final MINI_CHALLENGE
//TASK 11: Simple Car Deal Summary

function affordable(own, lease) {
  let carBrand = "TOYOTA";
  let carPriceis = 2499.8;
  let userbud = 3550;
  console.log(carBrand.toLowerCase(), Math.round(carPriceis));
  if (carPriceis < userbud) {
    console.log(
      `Don't worry about $${carPriceis} , make a self a treat! buy the ${carBrand} ,Congratulations."`,
    );
  }
}

affordable();
