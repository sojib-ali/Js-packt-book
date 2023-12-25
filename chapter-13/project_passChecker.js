const allowed=["1234","pass","apple"];
function password_checker(pass){
    let z=allowed.includes(pass);
    return z;
    
}
function login(password){
    return new Promise((resolve,reject)=>{
        if(password_checker(password)){
            resolve({
                status: true
            });
        }else{
            reject({
                status: false
            });
        }
    });
}
function checker(pass){
    login(pass)
        .then(token=>{
            console.log("Approve:");
            console.log(token);
        })
        .catch(value=>{
            console.log("Reject:");
            console.log(value);
        })
}
checker("1234");
checker("wrong");