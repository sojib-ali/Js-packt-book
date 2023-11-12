function outer_function(nr){
    console.log("outer function");
    function inner_function(x){
        console.log(x+7);
        console.log(`I can access outer variable ${nr}`);
    }
    inner_function(nr);
}
outer_function(2);