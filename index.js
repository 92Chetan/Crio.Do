// Creating a Simple Calculator which takes two input, performs the operations on input and shows the output.

//Select the operation that needs to perform.
const operator = prompt('Enter the operator (either +, -, * or / ): ');

//Take the First and second Number as an input.
const Num1 = parseFloat (prompt('Enter the First Number : '));
const Num2 = parseFloat (prompt('Enter the Second Number : '));

let result;

//Using if...elseif...else stmt.
if (operator == '+')
{
  result = Num1 + Num2;
}
else if (operator == '-')
{
  result = Num1 - Num2;
}
else if (operator == '*')
{
  result = Num1 * Num2;
}
else {
  result = Num1 / Num2;
}

// Display the result 

console.log(`${Num1} ${operator} ${Num2} = ${result}`);