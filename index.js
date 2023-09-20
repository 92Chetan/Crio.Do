// Problem 1 
// Write a for loop condition to print the numbers from 1 to 10.

for (let i=1; i<=10; i++){
 console.log (i); 
}

// Problem 2 
// Write a program to print the even numbers b/w 1 to 50 using for loop.

for (let i=1; i<=50; i++){
if(i%2==0){
  console.log(i);
}

}

// Problem 3 
// Write a program to print the odd numbers b/w 1 to 50 using for loop.

for (let i=1; i<=50; i++){
  if(i%2 !=0){
    console.log(i);
  }
}

// Problem 4
// Write a program to print the numbers from 1 to 15 using while loop.

 let n = 1;
while(n<=15){
  console.log(n++);

}


// Problem 5 
// Write a program to print the number from 1 to 15 using do-while loop.

let i =1;
do{
  console.log(i++);
}while(i<=15);


// Program 6
// Write a program to print the Months name based on the provided number input using the switch satement:

let x = parseInt(prompt("Enter a Number B/w 1 and 12"));

switch (x){
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

for (i=1; i<=10; i++)
 {
   if(i==3)
   {
     continue;
   }
  console.log(i);
 }

// Program 8
// Write a program to take 3 numbers as an input from the user and find the greatest among them.


let x = parseInt(prompt ("Enter First Number: "));
let y = parseInt(prompt ("Enter Second Number: "));
let z = parseInt(prompt ("Enter Third Number: "));
if (x>y) {
    if (x>z) {
      console.log(x +" "+ "Is the Greatest Among Three Numbers")
    } else {
      console.log(z +" "+ "Is the Greatest Among Three Numbers")
    }
  } else if (y>z) {
    console.log(y +" "+ "Is the Greatest Among Three Numbers")
  } else {
    console.log(z +" "+ "Is the Greatest Among Three Numbers")
  }

// Program 9
// Write a program to print the odd numbers from 7 to 31 using for loop.

for(i=7; i<=31; i++){
  if(i%2 !=0){
  console.log(i);
  }
}

// Program 10
// Write a program to print the even numbers for 10 to -20 using for loop.

for (i=-20; i<=10; i++){
  if(i%2 ==0){
    console.log(i);
  }
}

// Program 11
// Write a program to implement parameterized function:

function sum(num1, num2){
var sum = num1+num2;
console.log(sum);
}
  sum(1,2);


//Program 12
// Write a program to implement sum of two numbers taken as an input from the user using functions.

let a = parseInt(prompt ("Enter the First Number: "));
let b = parseInt(prompt ("Enter the Second Number: "));
console.log(sum(a,b));
function sum(a,b){
let result = a+b;
  return(result);
}

// Program 13
// Write a program to implement smallest of the three numbers as an user input using functions.

let x = parseInt(prompt("Enter the First Number: "));
let y = parseInt(prompt("Enter the Second Number: "));
let z = parseInt(prompt("Enter the Third Number: "));
console.log(smallest(x,y,z));
function smallest(x,y,z){
  if(x<y && x<z){
    console.log(x + " "+ "is the smallest.");
    }
  else if (y<z && y<x){
    console.log(y +" "+ "is the smallest.");
  }
  else{
    console.log(z +" "+ "is the smallest.");
  }
}