function say_something(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve (`Something ${x}`);
        },2000);
    });
}

async function talk(x){
    const words=await say_something(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);