
// Write your code here
//instruction 1

const num1 = 31;
const num2 = 2;

const multiply = num1 * num2

console.log(multiply);

//instruction 2
//we use the Math.random to genearate a number between 0 and 1 we
//then multiply by 100 to get a number btwn 0 and 100
//math floor is used to round to nearest lower number
let random = Math.floor(Math.random() * 100) + 1;

console.log(random);

//instructions 3
let num3 = 20;
let num4 = 8;
//we use the modulus operator
let mod = num3 % num4;

console.log(mod); //

//instruction 4

//i created an array called numbers 
let numbers = [5, 10, 20, 15, 7];

//create a container called max and used the method math.max to output the 
//largest value, use the spread operator to pass the array elements
let max = Math.max(...numbers);

console.log(max); 


