/* while loop example -1 

let some_array=["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let not_found=true;

while(not_found && some_array.length > 0){
    if(some_array[0]=== "sojib"){
        console.log("found her!");
        not_found=false;
    }
    else{
        some_array.shift();
    }
} */

/* Fibonacci sequence using while loop 
let nr1=0, nr2=1, temp;
fibonacci_array=[];
while(fibonacci_array.length<25){
    fibonacci_array.push(nr1);
    temp=nr1+nr2;
    nr1=nr2;
    nr2=temp;
    
}console.log(fibonacci_array); */

/* practice excercise 5.1 
const readline = require('readline');

const max = 6;
const ran_num = Math.floor(Math.random() * max) + 1;

async function startGame() {
    let correct = false;

    while (!correct) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
       await new Promise((resolve) => {
            rl.question(`Guess a Number 1 - ${max}: `, (guess) => {
                console.log(`You guessed: ${guess}`);
                guess = Number(guess);
                if (guess === ran_num) {
                    correct = true;
                    console.log(`You got it! The number was ${ran_num}.`);
                } else if (guess > ran_num) {
                    console.log('Too high');
                } else {
                    console.log('Too low');
                }
                rl.close();
                resolve();
            });
        });
    }
}

startGame(); 
*/
/*const prompt = require("prompt-sync")({ sigint: true });
const max = 5; 
const ranNumber = Math.floor(Math.random() * max) + 1; //console.log(ranNumber); 
let correct = false; 
while (!correct){
    
        let guess = prompt("Guess a Number 1 - " + max); 
        guess = Number(guess); 
        if (guess === ranNumber) {
        correct = true; 
        console.log("You got it " + ranNumber);
    } 
    else if (guess > ranNumber) {
         console.log("Too high");
    } else 
    { console.log("Too Low"); 
    }
}*/


/*
let arr_arrays2=[];
for(let i=0;i<3;i++){
    arr_arrays2.push([]);
    for(let j=0;j<7;j++){
       arr_arrays2[i].push(j);
    }
}
console.log(arr_arrays2);

let arr_arrays=[];
for(let i=0;i<3;i++){
    arr_arrays[i]=[];
    for(j=0;j<7;j++){
        arr_arrays[i][j]=j;
    }
}
// console.log(arr_arrays);
console.table(arr_arrays);*/

/* practice excercise 5.3 
const my_work=[];
for(let x=0;x<10;x++){
    let stat=x%2?true:false;
    let temp={
        name: `Lesson ${x+1}`, status:stat
    };
    // my_work.push(temp);
    my_work[x]=temp;
}
console.log(my_work); */
/*
let arr=[];
let index=0;
for(let i=0;i<10;i+=2){
    arr[index]=i;
    index+=1;
    // arr.push(i); 
}console.log(arr); */

// let arr1=[];
// let i=0;
// while(i<100){
//     // arr1.push(i);
//     if(i<1){
//         arr1[i]=i;
//     }
//     else{
//         arr1[i]=i;
//     }
//     i+=2;
// }console.log(arr1);

/* practice excercise 5.4 */
// const my_table=[];
// const rows=4;
// const cols=7;
// let counter = 0;
// for(let y=0; y<rows; y++){
//     let temp_table=[];
//     for(let x=0;x<cols;x++){
//         counter++;
//         temp_table.push(counter);
//     }
//     my_table.push(temp_table);
// } console.table(my_table);

/* let arr_arrays4=[];
let counter=0;
for(let i=0;i<3;i++){
    arr_arrays4[i]=[];
    for(let j=0;j<7;j++){
        counter++;
    //    arr_arrays2[i].push(counter);
    arr_arrays4[i][j]=counter;
      
    }
}
console.table(arr_arrays4); */
/*
let names=["Chantal", "Jhon", "Maxime", "Bobbi", "jair"];
let index=0;
let key="jair";
for(let i=0;i<names.length;i++){
    if(i==names.length-1 && names[i]==key){
        names.splice(i,1);
    }
    else if(names[i]==key){
        index=i+1;
        names.splice(i,1,`Hello ${names[index]}`); 
        names.splice(index,1);  
    }else{
        names[i]=`Hello ${names[index]}`;
        index++;
    }
} console.log(names); */


// let name=["Chantal", "Jhon", "Maxime", "Bobbi", "jair"];
// console.log(name.length);
/*
const grid=[];
const cells=64;
let counter = 0;
let row;
for(let x=0; x<cells+1; x++){
    if(counter%8==0){
        if(row!=undefined){
            grid.push(row);
        }
        row=[];
    }   
    counter++;
    let temp=counter;
    row.push(temp);
}
console.table(grid); */

/* for in loop 
let car = {
    model:"golf",
    make: "volkswagen",
    year: 1999,
    color: "black"
    };
    for(let prop in car){
        console.log(car[prop]);
    }*/

/* Looping over objects by converting to an
array */

let car ={
    model: "Golf",
    make:"Volkswagen",
    year: 1999,
    color: "black",
};

// let arrKeys=Object.keys(car);
// console.log(arrKeys);

/* for(let key of Object.keys(car)){
    console.log(key);
}

for(let key of Object.values(car)){
    console.log(key);
} */

/* let groups=[
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina","Ali"],
    ["Helen", "Jonah", "Sambikos"],
];

for(let group of groups){
    for(let member of group){
        console.log(member);
    }
} */

/* Chapter-Project - Math multiplication table */
const my_table =[];
const numm=10;
for(let x=0;x<numm;x++){
    const temp=[];
    for(let y=0;y<numm;y++){
        temp.push(x*y);
    }my_table.push(temp);
}console.table(my_table);
