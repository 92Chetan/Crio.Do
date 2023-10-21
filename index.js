// Problem 1
// Write a for loop condition to print the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Problem 2 
// Write a program to print the even numbers b/w 1 to 50 using for loop.

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }

}

// Problem 3 
// Write a program to print the odd numbers b/w 1 to 50 using for loop.

for (let i = 1; i <= 50; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Problem 4
// Write a program to print the numbers from 1 to 15 using while loop.

let n = 1;
while (n <= 15) {
  console.log(n++);

}


// Problem 5 
// Write a program to print the number from 1 to 15 using do-while loop.

let i = 1;
do {
  console.log(i++);
} while (i <= 15);


// Program 6
// Write a program to print the Months name based on the provided number input using the switch satement:

let x = parseInt(prompt("Enter a Number B/w 1 and 12"));

switch (x) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febuary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
    Default:
    console.log("Invalid Input !!")
    break;
}

// Problem 7
// Write a program to print numbers from 1 to 10 but not 3 using if condition.

for (i = 1; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Program 8
// Write a program to take 3 numbers as an input from the user and find the greatest among them.


let x = parseInt(prompt("Enter First Number: "));
let y = parseInt(prompt("Enter Second Number: "));
let z = parseInt(prompt("Enter Third Number: "));
if (x > y) {
  if (x > z) {
    console.log(x + " " + "Is the Greatest Among Three Numbers")
  } else {
    console.log(z + " " + "Is the Greatest Among Three Numbers")
  }
} else if (y > z) {
  console.log(y + " " + "Is the Greatest Among Three Numbers")
} else {
  console.log(z + " " + "Is the Greatest Among Three Numbers")
}

// Program 9
// Write a program to print the odd numbers from 7 to 31 using for loop.

for (i = 7; i <= 31; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Program 10
// Write a program to print the even numbers for 10 to -20 using for loop.

for (i = -20; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Program 11
// Write a program to implement parameterized function:

function sum(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}
sum(1, 2);


//Program 12
// Write a program to implement sum of two numbers taken as an input from the user using functions.

let a = parseInt(prompt("Enter the First Number: "));
let b = parseInt(prompt("Enter the Second Number: "));
console.log(sum(a, b));
function sum(a, b) {
  let result = a + b;
  return (result);
}

// Program 13
// Write a program to implement smallest of the three numbers as an user input using functions.

let x = parseInt(prompt("Enter the First Number: "));
let y = parseInt(prompt("Enter the Second Number: "));
let z = parseInt(prompt("Enter the Third Number: "));
console.log(smallest(x, y, z));
function smallest(x, y, z) {
  if (x < y && x < z) {
    console.log(x + " " + "is the smallest.");
  }
  else if (y < z && y < x) {
    console.log(y + " " + "is the smallest.");
  }
  else {
    console.log(z + " " + "is the smallest.");
  }
}

// Program 14
// Write a program to find the remainder when one number is multiply by another number using functions (take the inputs from the user).


let x = parseInt(prompt("Enter the Dividend"));
let y = parseInt(prompt("Enter the Divisor"));
console.log(find_Remainder(x, y));
function find_Remainder(x, y) {
  remainder = x % y;
  return (remainder);
}

//Program 15
// Write a program to find the area and perimeter of a rectangle using functions (take the input from the user).

let x = parseInt(prompt("Enter the Lenght of the rectangle : "));
let y = parseInt(prompt("Enter the width of the rectangle :"));
console.log(calculate_Area(x, y));
console.log(Perimeter(x, y));

function calculate_Area(x, y) {
  Area = x * y;
  return (Area);
}

function Perimeter(x, y) {
  Perimeter = 2 * (x + y);
  return (Perimeter);
}

//-----------------------Session 8 Practice set-----------------------

var restaurantBill = 100;
function amountToPay(amount) {
  amount = amount + (0.625 * amount);
  return amount;
}
amountToPay(restaurantBill);
console.log(restaurantBill);

//---------------------------------------------------------------------

function isEquilateral(a, b, angle) {
  if (a == b && angle == 60) {
    return (true);
  }
}
console.log(isEquilateral(10, 10, 90));

//---------------------------------------------------------------------

function fish() {
  var fishcount = 1;
  console.log(fishcount);
}
fish();
console.log(fishcount);

//---------------------------------------------------------------------


function calculateDogAge(age) {
  var dogYears = 7 * age;
  console.log("Your doggie is " + dogYears + " years old in dog years");
}
calculateDogAge(1);
calculateDogAge(0.5);

//---------------------------------------------------------------------

function findTriangleType(side1, side2, side3) {

  if ((side1 == side2) && (side1 == side3)) {
    console.log("Equilateral triangle.");
  }
  else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
    console.log("Isosceles triangle.");
  }
  else {
    console.log("Scalene triangle.");
  }
}
findTriangleType(12, 12, 12);
findTriangleType(5, 4, 3);
findTriangleType(20, 20, 31)

//---------------------------------------------------------------------

var x, y;
var chr = "";
for (var x = 1; x <= 5; x++) {
  for (var y = 1; y <= x; y++) {
    chr = chr + ("*");
  }
  console.log(chr);
  chr = '';
}

//---------------------------------------------------------------------

var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b = b + (a * 2);
  console.log(b);
}


//---------------------------------------------------------------------

function range(length) {
  var a = 5;
  for (var i = 0; i < length; i++) {
    console.log(a);
  }
}
range(3);

//---------------------------------------------------------------------

//------------------Session 9 (Post Session)---------------------------


var a = 4;
var b = 1;
var c = 0;
if (a == b) {
  console.log(a);
} else if (a == c) {
  console.log(a);
} else {
  console.log(c);
}

//---------------------------------------------------------------------


var grade = 'E';
var result = 0;
switch (grade) {
  case 'A':
    result = result + 10;
  case 'B':
    result = result + 9;
  case 'C':
    result = result + 8;
  default:
    result = 0;
}
console.log(result);

//---------------------------------------------------------------------

var grade = 'A';
var result = 0;
switch (grade) {
  case 'A':
    result = result + 10;
  case 'B':
    result = result + 9;
  case 'C':
    result = result + 8;
    break;
  default:
    result = 0;
}
console.log(result);

//---------------------------------------------------------------------


function fun(num) {
  var a = 5;
  for (var i = 0; i < num; i++) {
    console.log(a);
  }
}
fun(2);

//---------------------------------------------------------------------


var a = 1;
if (a > 10) {
  console.log(10);
}
else {
  console.log(a);
}

//---------------------------------------------------------------------


function multiply() {
  var a = 1;
  var b = 2;
  return a * b;
}
console.log(multiply());

//---------------------------------------------------------------------


var a;
var b;
a = 10;
b = 20;
a = a + 10;
b = a;
console.log(a);
console.log(b);

//---------------------------------------------------------------------


While(3 == 3) {
  Console.log(“Hello World”);
}

//---------------------------------------------------------------------


var a = 0;
var b = 0;
while (a < 3) {
  a++;
  b = b + a;
  console.log(b);
}

// ----------------------- JS-1-B2- October Sprint --------------------
// ------------------------------ Session 1  --------------------------

var num;
console.log(num);

//---------------------------------------------------------------------

var number = 10;
number = "hello";
console.log(number);

//---------------------------------------------------------------------

var num = 10;
num = "hello";
console.log(typeof (num));

//---------------------------------------------------------------------

const name = "crio";
name = "criodo";

//---------------------------------------------------------------------
// ------------------------------ Session 2  --------------------------

//--mathematical expression
console.log(2 + 2);

//--relational expression

console.log(6 > 7);
console.log(6 < 7);

//-- logical expression
console.log(5 > 4 && 6 > 7);

console.log(!(true));
console.log(!(false));
console.log(!(6 > 7));
console.log(4 > 5 || 5 < 9);

//--operators

//--Relationals opertors (<,>,<=,>=,==,!=)

console.log(6 > 7);
console.log(7 > 6);
console.log(6 <= 6);

console.log(6 === 6); // checks data type and value.
console.log(6 == 6); // only checks the value.

console.log('6' === 6);
console.log('6' == 6);

console.log(5 !== 6); //strict
console.log(5 != 6); // non strict

console.log('6' !== 6); // checks data type and value.
console.log('6' != 6); // only checks the value.

//--------------------------------------------------------------------

//Prescedence(order of evaluation) - goes left to right.

//  B(DMR)AS
//Bracket(Divison / Multiplication / Remainder) Addition, Substraction

//--------------------------------------------------------------------

console.log("20" + ('20' / 4));


var age = 16;
if (age > 18) {
  console.log("can drive");
}
else {
  console.log("cannot drive");
}

//----Personalised msg using parameterized fucntion.

function bank(name, accountno) {
  console.log("congratulations " + name + " on successfully updating your KYC @yes bank for account number xxxxxxxx" + accountno);
}

bank("ajay", 1234);
bank("amay", 4567);
bank("anil", 21261);

//--- inclass activity 

function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 3)

////----------------------post Session Quiz----------------------------

const willRain = true;
if (!willRain || (3 === 3)) {
  console.log("Wear Raincoat");
}
else {
  console.log("Do not wear a raincoat");
}

function getSum(a, b) {
  return a + b;
}
console.log(getSum(2, 7));

//--------------------------------------------------------------------

function getDifference(a, b) {
  return a - b;
}
console.log(getDifference(7, 4));

//---------------------------------------------------------------------
// ------------------------------ Session 3  --------------------------

//--------If-else chaining-------

let a = 5;
let b = 6;
let c = 7;
if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}

//-----------Nested Conditionals---

let a = 5;
let b = 6;
let c = 7;
if (a >= b) {
  if (a >= c) {
    console.log(a);
  }
} else if (b >= a) {
  if (b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

//------------Stings---

let str = ""; //empty string
let str1 = "Hello World";

console.log(str.length);
console.log(str1.length);
console.log("Hello".length);

console.log("Hey what's up");

//---------Escape sequences---\ 

console.log('This is a single quote (\') and this is a double quote (")');

console.log('This is a backslash \\');
console.log('This is a backslash \\\\');

console.log("This is new world \n hiiii");
console.log("This is new world \t hiiii");


//-------------Accessing specific string characters---

let str = "Crio.Do is the best place to learn";
let str = "Hello World"
console.log(str.length); //11-1

//1. charAt() method

console.log(str.charAt(4));

//2. Sqaure bracket notation

console.log(str[4]);

// //----Access last element----

console.log(str[str.length - 1]);
console.log(str[str.length - 2]);

let str1 = "raj";
let str2 = "sahil";  //rs;

console.log(str1[0]); //r
console.log(str2[0]); //s
console.log(str1[0] + str2[0]);

//-----String Immutability----

let mystr = "Bob";
mystr[0] = "J"; //not allowed
console.log(mystr);

mystr = "Job";
console.log(mystr);

//----Strict mode---

'use strict'
let mystr = "Bob";
mystr[0] = "J"; //not allowed
console.log(mystr);

//-----------Template strings-----------

let str = `This is a new string
I am in second line now`;
console.log(str);

let name = "Rahul";
let off = 80;
// console.log("Hey "+name+" Congratualtions! Claim your "+off+" % off on your next order");

console.log(`Hey ${name} COngratulations! Claim your ${off}% off on your next order`);

console.log(`Hey this will result in: ${2 + 1}`);
console.log(`Hey this will result in: ${2 > 1}`);


//------Substring---

let str = "Crio.Do is the best place to learn";
let str = "Hello world"
let result = str.substring(0, 5); //startPos - inclusive, endPos-exculsive
console.log(result);

// -------------------- Session3 Post session quiz-----------------

let str = "I love coding, but I sometimes hate it as well!";
let i = 2;
let answer = str.substring(i, 10) + "ing,";
console.log(answer.concat(' m', 'ay', 'be'));

// // //----------------------------------------------------------------

let lang = "LavaScript";
lang[0] = "J";
console.log(lang);

// //----------------------------------------------------------------

const playerName = "Ronaldo";
const jerseyNum = 7;
const str = `${playerName} is my favorite soccer player. His jersey number is ${jerseyNum}.`;
console.log(str);

// //----------------------------------------------------------------

// Problem Description:
// You have been given a function findLength which returns the length of the string.But there is an error in the code, please debug this problem.You can start by uncommenting the code given in the function.


// Hint 1: In Javascript we can declare strings using single or double quotes i.e "string" or 'string' both are proper declarations of strings.

//   Hint 2: As long as we use both double or both single quotes we are good to go.

function findLength() {
  let str = "Crio Course";
  return str.length;

}
console.log(findLength());


// //----------------------------------------------------------------


let str = "Next time there won’t be a next time";
let substring = "time";

let index = str.indexOf(substring);

if (index !== -1) {
  console.log(`The substring "${substring}" was found at index ${index}.`);
} else {
  console.log(`The substring "${substring}" was not found in the string.`);
}

// // //----------------------------------------------------------------

function findLastOccurrenceIndex(str, k) {
  return str.lastIndexOf(k);
}


let inputString = "exampleexample";
let substring = "example";
let lastIndex = findLastOccurrenceIndex(inputString, substring);

console.log("Last occurrence index:", lastIndex);


// // ------------------------------ Session 4  ------------------------

console.log("0" === false);

// // //------------------Array Referencing-----------------------------

let x = [1, 2, 3]
let y = x;
x[0] = 1000;
console.log(x);
console.log(y);

// // //------------------arry.push()-----------------------------

const animals = ['pigs', 'goats', 'sheep'];
animals.push('cows');
console.log(animals);


//---------------------------------Post Sesion Quiz---------------------

// let i = 0;
// for(let j = i + 1;j >= 10;j--)
// {
//     console.log(j);
// }
// The above code does not give any output. Can you debug and modify the above code such that you can log numbers 1 to 10 on the console?

// Please paste your Replit link which has the correct code.


let i = 1; // Start from 1 instead of 0
for (let j = i; j <= 10; j++) {
  console.log(j);
}




// // ------------------------------ Session 6  ------------------------
//---------------------------------Post Sesion Quiz---------------------


let arrOfObj = [{ name: "Adam", age: 10 }, { name: "Alex", age: 12 }, { name: "Alice", age: 9 }];

console.log(arrOfObj[1]);

let nestObj = { name: { firstName: "Ajay", lastName: "Devgn" }, address: { area: "ABC Nagar", city: "XY city", pinCode: 347002 } };

console.log(nestObj.name.lastName);

// // //----------------------------------------------------------------

let arr = ["Ramesh", "Singh"];
let obj = { name: "Ramesh", age: 23 };
const { name, age } = obj;
const [firstName, lastName] = arr;
if (Array.isArray(obj)) {
  console.log("Hello World!");
} else {
  console.log(name + " " + firstName);
}

// // //----------------------------------------------------------------

console.log((0.1 + 0.2) === 0.3);

// // //----------------------------------------------------------------

let scale = 0;
let a = 1;
console.log(a / scale);
a = -1;
console.log(a / scale);
a = 0;
console.log(a / scale);
a = -0;
scale = 1;
console.log(a / scale);

// // ------------------------------ Session 7  ------------------------
//---------------------------------Post Sesion Quiz---------------------

function myFunc(num) {
  num = num + 10;
  console.log(num);
}
let n = 10;
myFunc(n);
console.log(n);

function arrFunc(arr) {
  arr.push(37);
  console.log(arr);
}
let a = [1, 2];
let b = [...a];
arrFunc(b);
console.log(b);
console.log(a);

// // ------------------------------ Session 8  ------------------------
//---------------------------------Post Sesion Quiz---------------------

var g = 10;
function func() {
  if (g == 10) {
    var t = 20;
    let p = 30;
  }
  console.log(t);
  console.log(p);
}
func();

// // //----------------------------------------------------------------

// Debug and modify the above code such that even though myFunc() stays at line 1 we can see “function executed” logged on the console.

Question :

myFunc();
var myFunc = function() {
  console.log("function executed");
}

Solution : 

var myFunc = function() {
  console.log("function executed");
}
myFunc();

// // //----------------------------------------------------------------

function dispData() {
  console.log("displayed data");
}
function getData(dispData) {
  console.log("received data");
  dispData();
}
getData(dispData);

// // //----------------------------------------------------------------


function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

var closureFn = outer();
closureFn();

// // //----------------------------------------------------------------

// What will be the output?

var a = 10;
function display(){
   console.log(a);
}
display();

// What will be the output?

function display(){
  var a = 10;
}
console.log(a);

// What will be the output?

function work(){
  var x = 1
  var x = 2;
  console.log(x);
}
work();

// What will be the output?

function work(){
  let x = 1
  let x = 2;
  console.log(x);
}
work();

// What will be the output?

let x = 1
function work(){
  let x = 2;
  console.log(x);
}
work();

// What will be the output?

display();

function display() {
   console.log('Will this work!');
}

// What will be the output?

funcExp();

var funcExp = function display() {
    console.log('Will this work!');
}


// What will be the output?

function greet() {
  return function() {
    console.log('Inner function');
  }
}
const returnVal = greet();
returnVal();

// What will be the output?                          //doubt ... ?

function greet(message) {
  message();
}
function message() {
  console.log('Hello World');
}

greet(message);

// What will be the output?

function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  }
}

var addSix = createBase(6);
console.log(addSix(10));