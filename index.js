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

// -------- JS-1-B2- October Sprint --------------------