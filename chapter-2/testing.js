/* string assinged with double quotation and backtick */

let language = "javascript";
let message = `Let's learn ${language}`;
console.log(message);

/* Escape Character */

let str = "Hello, what's your name? Is it \"Mike\" ?"
console.log (str);

let some = 'Hello, what\'s your name?';
console.log(some);

/* Symbol */

let str1 = "Javascript is fun!";
let str2 = "Javascript is fun!";
console.log("These two strings are the same:", str1===str2);

let sym1= Symbol("javscript is fun!");
let sym2= Symbol("Javascript is fun");
console.log("These two Symbols are the same:", sym1===sym2);

/* converting data types */

let number_to_string = 6;
number_to_string = String(number_to_string);
console.log(number_to_string, typeof number_to_string);

let string_to_number="12";
string_to_number=Number(string_to_number);
console.log(string_to_number, typeof string_to_number);

let string_to_bool = "any string will return true";
string_to_bool = Boolean(string_to_bool);
console.log(string_to_bool, typeof string_to_bool)

/* practice excercise 2.1 */
let string1 = 'Laurence';
console.log("string1:", typeof string1);

let string2 = "Svekis";
console.log("string2:", typeof string2);

let val1 = undefined;
console.log("val1:", typeof val1);

let val2 = null;
console.log("val2:", typeof val2);

let myNum = 1000;
console.log("mynym:", typeof myNum);

/*practice excercise 2.2*/
let my_name = "sojib";
let my_age = 27;
let i_can_code = true;

console.log("Hello,","my name is", my_name, "I can code javascript: ",i_can_code);

console.log(`Hello, my name is, ${my_name}, I am ${my_age} years old and I can code javascript: ${i_can_code}`);

let nr1 = 4;
console.log(++nr1);

/* practice excercise 2.3 */

// let a=prompt('type a:');
// let b=prompt('type b:');

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a, b;

rl.question('Type a: ', (inputA) => {
  a = inputA;
  rl.question('Type b: ', (inputB) => {
    b = inputB;
    rl.close();

  

sq_a=a**2;
sq_b=b**2;

area_hypotenuse= (sq_a+sq_b)**0.5;

console.log(`area of hypotenuse: ${area_hypotenuse}`);
  });
});
*/

/* practice excercise 2.4 */

let aa =2;
let bb =3;
let cc= 4;

bb+=aa;
aa/=cc;
cc%=bb;

console.log(bb,aa,cc)

/* Chapter Project */
// Miles-to-mile_to_kilometers converter

const mile_to_kilometers=1.60934;
let value_in_miles = 130;

let value_in_kilometers = value_in_miles * mile_to_kilometers;

console.log(`The distance of 130 kms is equal to ${value_in_kilometers} miles`);

// BMI calculator

const height_in_cm=2.54;
const weight_in_pounds=2.2046;

let height=1;
let weight =1;

conversion_to_cm=height*height_in_cm;
conversion_to_kilos=weight*weight_in_pounds;
console.log(`${height}=${conversion_to_cm} and ${weight}=${conversion_to_kilos}`);
BMI_calculation=conversion_to_kilos/(conversion_to_cm**2);
console.log(`BMI=${BMI_calculation}`);