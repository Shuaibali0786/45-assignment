// Difine varibale
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var furits = ["apple", "banana", "orange"];
//Test for equal and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple");
console.log(apple != "apple");
// Test using Lowercase function
console.log("Is APPLE is equal to apple ofter converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple afterr coverting to lovwercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical test
// Equal to
console.log("\n Is ten is equal tp twenty");
console.log(ten == twenty);
// Not Equal to
console.log("\n  Is ten equal to twenty");
console.log(ten != twenty);
// Grater than
console.log("\n Is ten is grater than zero");
console.log(ten > 0);
// Less than
console.log("\n Is twenty is less than 10");
console.log(twenty < 10);
// Grater than or equal to
console.log("\n Is ten is grater than or equla to 5");
console.log(ten >= 5);
// Less than or equal to 
console.log("\n twenty is less than or equal to  10");
console.log(twenty <= 10);
// tests using "and" & "or" oprators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (or) tsc main.ts && node main.js
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// test wheather an item is include in array
console.log("Is orange include in my fruits array");
console.log(furits.includes("orange"));
// Tests using "and " & "or" oprators
console.log("\ntweny is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(twenty > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(twenty > 50 || 20 != 20);
// test weather an item is include in array
console.log("\n is orange include in my frutis array");
console.log(furits.includes("orange"));
console.log("\nIs orange not include in  my  fruits array");
console.log(furits.includes("orange"));
