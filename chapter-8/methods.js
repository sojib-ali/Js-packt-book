/*let s="Hello";
console.log(
    s.concat(" there!").toUpperCase().replace("THERE", "you").concat(" You're amazing!")
);

const secretMes1 = "How's%20it%20going%3F";
const secretMes2 = "How's it going?";
const decodedComp=decodeURIComponent(secretMes1);
console.log(decodedComp);

const encodedComp=encodeURIComponent(secretMes2);
console.log(encodedComp);
const uri = "http://www.basescripts.com?=Hello World";
const encoded=encodeURI(uri);
console.log(encoded); */

/* forEach method */
/* let arr=["grapefruit", 4, "hello", 5.6, true];

arr.forEach((element,index)=>{
    console.log(`Printing stuff: ${element}, on array position: ${index} `)
}); */

// Filtering an array
/* let arr = ["squirrel", 5, "tjed", new Date(), true];
let filter_arr=arr.filter((element)=>{
    return typeof element === "string";
});
console.log(filter_arr); */

// array element replacement

/*arr=["grapefruit", 4, "hello", 5.6, true];
let p=arr.copyWithin(0,3,5);
console.log(p); */

// map method
/*let arr = [1,2,3,4];
let mapped_arr=arr.map(x=>{
    return x=x+1;
});
console.log(mapped_arr); */

/* Practice exercise 8.2 

const arr=["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];
const arr2=arr.filter((value,index,array)=>{
    console.log(value, index, array.indexOf(value));
    return array.indexOf(value)===index;
}); 
console.log(arr2); */

// Practice Exercise 8.3
/*
let arr_num=[1,2,3,4,5];
let updated_arr=arr_num.map(element=>{
    return element*2;
});
console.log(updated_arr); */

// split method
/*
let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);

let fav_fruits="strawberry, watermelon, grapefruit";
let arr_fruits = fav_fruits.split(",");
console.log(arr_fruits); */

// join mehtod
/*
let letters = ["a", "b", "c"];
let x = letters.join("-");
console.log(x); */

// charAt
/*let poem = "Lag ja gale";
let pos1= poem.charAt(1);
console.log(pos1); /*

// creating substring
/* let str = "Create a substring";
let substr1 = str.slice(5);
let substr2= str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2); */

// first letter capital
/*let caps ="HI HOW ARE YOU?";
let fixed_caps=caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital); */



   



