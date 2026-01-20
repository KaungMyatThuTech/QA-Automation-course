// Identify the Dat Type in JavaScript

//  value                        Data type
//"Hello World"          is      String data type
// (42)                  is      Number data type
// "NULL"                is      NULL data type
//undefined"             is      underfined data type
//1,2,3,]                is      array data type
//{name:"Jone", age:33}  is      Object data type

//_______________________________________________________________________________;

// Creating  Variables With  One of my favorite moive //
let FavoriteMovie = " RANGO";
console.log("my favorite moive is", FavoriteMovie);

const age = 20;
console.log("when i was", age, "RANGO was Relased");

let isItStillMyFavoriteMovie = "yes!";
sItStillMyFavoriteMovie = "yes!";
console.log(
  "Is it Still Standing One of my favorite movie list?",
  sItStillMyFavoriteMovie,
);
// I DIDN'T KNOW PARTTWO COME RO NOT
let parttwocameout = undefined;
console.log("parttwocameout", parttwocameout);

//AFTER BROWSING ON CHROME AND FOUND OUT,ANSWRE IS NO
parttwocameout = "No!";
console.log("I found out ", parttwocameout);

//Before I NEVER THROUGH OF THE MOVIE GOT ANY AWARDS?
let anyNominationsAwards = null;
console.log("any awards and nominations of Rango?", anyNominationsAwards);

//AFTER FOUND OUT !!
anyNominationsAwards = "84th Academy Awards";
console.log(
  "any nominations awards the movie got? yes The ",
  anyNominationsAwards,
  "at 2012.",
);
//_______________________________________________________________________________;

// 3. Primitibve VS Non-primitive

let a = "JS"; // is primitive.
let c = 100; // is primitive.
let d = { city: "Paris" }; // ia Non-primitive.
let b = [10, 20]; // is Non-primitive.
// D and B are Non-primitive,
// Because we can change the contents without re-assigning the variable.

//_______________________________________________________________________________//
//4.Modify the Value
let x = "Hello";
let y = x;
y = "Hi";

//A -The value if X is "HEllo"
//B -is it an example of primitive,Because variable X of value are Immutable,
//The value itself is immutable.we cannot change a character in a string.
//_________________________________________________________________________________//

//5. Array
let winningNumbers = [24, 30, 35, 45, 55];
console.log(winningNumbers);

const fastName = ["bobby, Scott, bill, jon,matt."];
console.log(fastName);

const car = [
  {
    carModel: "Jeep Grand Cherokee",
    modelYear: 2020,
    manufactureby: "USA",
    Engine: "3.6L",
    FuelType: "Gasoline.",
  },
];
console.log(car);
//-----------------------------------------------------------------------//
//6. Object

let toothpaste = {
  brand: "coolgate",
  size: "8 oz",
  taste: "sharp cool mint",
  effective: "Dental hygiene",
  colors: ["WHITE,BLUE,GREEN"],
};
console.log(toothpaste);

let myCar = {
  carModel: "Jeep Grand Cherokee",
  modelYear: 2020,
  manufactureby: "USA",
  Engine: "3.6L",
  colors: ["Gasoline,hybirds,plugging"],
};
console.log(myCar);

let myTelevision = {
  size: "55 inch",
  resolution: "4k OLED",
  processingPower: "smart buildin AI",
  connectivity: "wifi,Eternel slot",
  channel: ["CNN,FOX,ABC"],
};
console.log(myTelevision);

//------------------------------------------------------------------------//

//PART B: CONTROL-FLOW
//7. IF Statement
let myLinuxSkill = 8;
if (myLinuxSkill > 5) {
  console.log("positive number ,Clap,clap,clap!!");
}

//8. IF-ELSE. Example with my sql actuall skill!!

let areYouGoodAtCode = true;
if (areYouGoodAtCode) {
  console.log("let him cook!");
} else {
  console.log("put your hands on keyboare and start typing!");
}
areYouGoodAtCode = false;
if (areYouGoodAtCode) {
  console.log("let him cook!");
} else {
  console.log("put your hands on keyboare and start typing!");
}

//9. ELSE IF

let sqlSkill = 80;

if (sqlSkill > 90) {
  console.log("Grade A");
} else if (sqlSkill >= 80) {
  console.log("Grade B");
} else if (sqlSkill > 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
//--------- --------------- ------------- -----------//

//10. Switch Statement
//with BREAK
let favClass = "saturday class";
switch (favClass) {
  case "monday class":
    console.log("monday class");
    break;
  case "Thursday class":
    console.log("Thursday class");
    break;
  case "saturday class":
    console.log("saturday class");
    break;
  default:
    console.log("No comment!");
}
//---------------------------------------------//
// Without BREAK

let favClass1 = "saturday class";
switch (favClass1) {
  case "monday class":
    console.log("monday class");

  case "Thursday class":
    console.log("Thursday class");

  case "saturday class":
    console.log("saturday class");

  default:
    console.log("No comment!");
}
/////-------------------------------------////

//11. CHALLENG
// solution (1)
let idNumber = 101;

if (idNumber < 0) {
  console.log("Negative number,we don't care");
} else if (idNumber >= 0 && idNumber <= 9) {
  console.log("single digit number");
} else if (idNumber < 9 && idNumber > 99) {
  console.log("Double digit number");
} else idNumber > 100;
{
  console.log(
    "Definitely not a negative,single or duuble digit number,So it is something else",
  );
}
// solution (2)
//my bank account balance before deposit
let myAccountBalance = -3;
myAccountBalance = -3;
console.log(myAccountBalance, "$ Negative Number,we don't care");

//after received zelle transfar from my friend!
let myAccountBalanceDay2 = 3;
myAccountBalanceDay2 = 3;
console.log(myAccountBalanceDay2, "$ is sigle digit number");

//later on ,more zelle money recieved
let myAccountBalanceDay3 = 99;
myAccountBalanceDay3 = 99;
console.log(myAccountBalanceDay3, "$ Double digit up!!");

// I was in Las Vegas and in casino after i hit the jack pot!!
let myAccountBalanceDay4 = 1000000;
myAccountBalanceDay4 = 1000000;
console.log(
  myAccountBalanceDay4,
  "$ is definitely not a negative,single or double digit number,Hope my dream come true!!",
);
