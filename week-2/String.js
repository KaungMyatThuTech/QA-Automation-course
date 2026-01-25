// Creating strings with single quotes, double quotes, and backticks

let str1 = "Hey";
let str2 = "there";
let str3 = `Good Morning`;
console.log(str1 + " " + str2 + " " + str3 + "!");
console.log(`${str1} ${str2} ${str3} !`);

// 1 . string length
let personName = "Kaung Myat";
console.log(personName.length);

// 2. Accessing characters
let askingString = "How are you?";
console.log(askingString[0]);
console.log(askingString[7]);

// 3 . Changing case

let greeting = "Howdee!";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// 4. Trim() - removes whitespace from both ends of a string

let messy = " JavaScript ";
console.log(messy);
console.log(messy.trim());

// 5. Slice(start, end)
let text = "TojTech!";
console.log(text.slice(0, 3));
console.log(text.slice(3, 7));

// 6. Replace() - replaces a specified value with another value in a string
let welcomeMessage = "Welcome to TojTech!";
console.log(welcomeMessage.replace("TojTech", "JavaScript"));

// 7. includes(substriing)
const sentence = "The brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox"));
console.log(sentence.includes("cat"));

// 8. split(separator)
let vegetables = "Carrot, Potato, Tomato, Cabbage";
console.log(vegetables.split(" / "));

// 9. concat(string1,string2,....)
let firstName = "Kaung";
let lastName = "Myat";
console.log(firstName.concat(" ", lastName));

// 10 . indexOf(substring)
let sentence1 = "Learning JavaScript is fun!";
console.log(sentence1.indexOf("JavaScript"));
console.log(sentence1.indexOf("Python"));

// 12. startsQith() and endsWith()
let filename = "document.pdf";
console.log(filename.startsWith("doc"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".doc"));

// Template Literals
let userName = "Kaung Myat";
let greetingMessage = `Hello, ${userName}! Welcome to the JavaScript world.`;
console.log(greetingMessage);

// Multi-line strings .
let poem = `stars are bright
  the night is calm
  the world is beautiful`;
console.log(poem);

// 2. Expressions in template literals
let N = 5;
let M = 10;
console.log(`The sum of ${N} and ${M} is ${N + M}.`);

// 3. Combining String Methods + Template Literals
let userName2 = "  kaung myat  ";
let jvSkillLevel = "80";
console.log(
  `Hello, ${userName2.trim().toUpperCase()}!
   Your JavaScript skill level is 
   ${parseInt(jvSkillLevel) + 10}%.`,
);
