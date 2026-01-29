//1.Global Scope

let GlobalVar = "I am global";
console.log(GlobalVar);

function printSomething() {
  if (14 > 2) {
    console.log(GlobalVar);
  }
}

//2. Function Scope

function greet() {
  let message = "Hello from inside the function!";
  const age = 50;
  console.log(message);
}
greet();
