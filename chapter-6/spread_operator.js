let spread = ["so", "much", "fun"];
let message=["Javascript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

function add(x,y){
    console.log(x+y);
}
let arr=[5,9];
add(...arr);

let add1=(x,y,z,a)=>{
    console.log(x+y+z+a);
}
let arr1=[5,9];
let arr2=[6,7];
add1(...arr1,...arr2);