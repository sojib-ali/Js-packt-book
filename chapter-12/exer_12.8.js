let myList=[{
        "name": "Learn JavaScript",
        "status": true
    },
    {
        "name":"Try JSON",
        "status": false
    }
];
// reloader();
// function reloader(){
//     myList.forEach((el)=>{
//         console.log(`${el.name}=${el.status}`);
//     });
// }

// let dog={
//     "name": "wiesje",
//     "breed":"dachshund",
// };
// let strdog=JSON.stringify(dog);
// console.log(typeof strdog);
// console.log(strdog);


const newStr = JSON.stringify(myList);
const newObj = JSON.parse(newStr);
newObj.forEach((el)=>{
    console.log(el);
});