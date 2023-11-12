
/*const prompt = require("prompt-sync")({ sigint: true });
function say_Hello(){
    let you = prompt("What's your name? ");
    console.log(`Hello, ${you}!`);
}
say_Hello();

//  functions in a variable 

let var_containing_function=function(){
    let var_in_function="I am in a function.";
    console.log(`Hi there!, ${var_in_function}`);
};
var_containing_function(); */
/*
function add(x,y){
    return x+y;
}
// add(4,5);
// add(4,5);
// console.log(result);

let result_arr = [];
for(let i=0;i<10;i++){
    let result = add(i, 2*i);
    result_arr.push(result);
}
console.log(result_arr); */

let add=(x,y)=>x+y;

// let add=(x,y)=>{
//     console.log("Adding...");
//     return x+y;
// }
let result = add(12,15);
console.log(result);
