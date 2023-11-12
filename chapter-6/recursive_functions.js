function log_recursive(nr){
    console.log(`Started function: ${nr}`);
    if(nr>0){
        log_recursive(nr-1);
    }else{
        console.log("done with recursion");
    }
    console.log(`Ended fucntion: ${nr}`);
}
log_recursive(3);