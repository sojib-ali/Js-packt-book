(function(){
    console.log("iife");
})();

(()=>{
    console.log("iifes");
})();

((a,b)=>{
    console.log(a+b);
})(3,4);