let cnt=0;
function output_time(val){
    return new Promise(resolve=>{
        setTimeout(()=>{
            cnt++;
            resolve(`x value ${val} counter:${cnt}`);
        },1000);
    });
}
async function a_call(val){
    console.log(`ready ${val} counter: ${cnt}`);
    const res = await output_time(val);
    console.log(res);
}
let x=1;
while(x<4){
    a_call(x);
    x++;
}