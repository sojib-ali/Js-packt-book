// A simple example of promise

/*let promise=new Promise((resolve,reject)=>{
    let x=5;
    if(x>10){
        resolve(x);
    }else{
        reject("Too low");
    }
});
promise.then(
    (value)=>{
        console.log(`Success: ${value}`);
    },
    (error)=>{
        console.log(`Error: ${error}`);
    }
); */

/*****-------------------------------------------------******* */

// An example of then method using as promise
const promise=new Promise((resolve,reject)=>{
    resolve("success!");
})
.then(value=>{
    console.log(value);
    return "we";
})
.then(value=>{
    console.log(value);
    return "can";
})
.then(value=>{
    console.log(value);
    return "chain";
})
.then(value=>{
    console.log(value);
    return "promises";
})
.then(value=>{
    console.log(value);
})
.catch(value=>{
    console.log(value);
});
