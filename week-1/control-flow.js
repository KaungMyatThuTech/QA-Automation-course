//1. Example when th condition is true

//IF is KEYWORD provided by JS.
// Inside parenthesis (), we need to give a condition.
// Inside curly braces{}, We have provide the code that we want if to run if the condition is true.
let age = 24;

if (age > 18) {
  console.log("yo!I bet! yl about to go to college!");
}
//2.  Example when the condition is false

age = 13;
if (age > 18) {
  console.log("yo! yo! chill Bro,couple year more");
}
// 3. Else IF

let studentScore = 73;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade F");
}

// 4. ELSE

let isRaining = true;

if (isRaining) {
  console.log("you about to get wet by rain!");
} else {
  console.log("DON't you worry about the rain!");
}

// 5. IF , ELSE IF , ELSE
// = single equal is used for assingment
// ==== triple equal is used for comparison

let goalScore = 4;

if (goalScore > 3) {
  console.log("you are still Okay!");
} else if (goalScore === 3) {
  console.log("DAN ten DOn");
} else {
  console.log("O HO HO");
  b;
}

// SWITCH STATEMENT

let day = 4;

switch (day) {
  case 1:
    console.log("Monday,What a fun start");
    break;
  case 2:
    console.log("Tuesday, barely hanging in there");
    break;
  case 3:
    console.log("Wednesday,OOH not event a word");
    break;
  case 4:
    console.log("Thursday,what do you mean?");
    break;
  case 5:
    console.log("Friday, TGIF");
    break;
  default:
    console.log("WEEKEND!!I'm at home ,Don't Call me");
}
