//console.log("Hello world!");
//console.log("Hello world!");
//j1.Create a function named greet

function greet() {
  const addition = 2 + 5;
  console.log(addition);
}

greet(); // i am calling the function --> Giving instruction to JS to make my function work.

//2. Function with single parameter
//Name inside paranthesis is called parameter.

function newGreet(name) {
  console.log(`Hellow ${name}Welcome to class`);
}

newGreet();

//3. Function with multiple parameters.

function add(num1, num2, num3, num4, num5) {
  console.log(num1, num2, num3, num4, num5);
} // Addition of 5 numbers

add(1, 2, 3, 4, 5, 6); // Arguments --> Values we pass in function when we call it.

function printNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is greater than ${num1}`);
  }
}
printNumbers(10, 5);

//4. Default parameters.
function greetStudent(name = "Student") {
  console.log(`Hello ${name} Welcome to JavaScript class`);
}
greet();
greetStudent("John");

// 5. Return Values

function addNewNumbers(num1, num2) {
  return num1 + num2;
}
function functionResult(num1, num2) {
  const result = num1 + num2;
  return result;
}
 
