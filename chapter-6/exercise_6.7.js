let start=10;
function loop1(val){
    console.log(val);
    if(val<1){
        return;
    }
    return loop1(val-1);
}
loop1(start);
function loop2(val){
    console.log(val);
    if(val>0){
        val--;
        return loop2(val);
    }return;
}loop2(start);

const test = function (val){
    console.log(val);
}
test(`Hello 1`);

function test1(val){
    console.log(val);
}test1("Hello 2");