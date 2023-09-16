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