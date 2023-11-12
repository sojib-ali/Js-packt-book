function cal(a,b,op){
    if(op == "-"){
        return a-b;
    }else{
        return a+b;
    }
}

const my_arr=[];
for(let x=0;x<10;x++){
    let val1 = 5*x;
    let val2 = x*x;
    let res=cal(val1,val2,"+");
    my_arr.push(res);
}
console.log(my_arr);