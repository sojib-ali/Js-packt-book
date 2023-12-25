// E-1: A simple Callbacks example

/*function doSomething(callback){
    callback();
}
function sayHi(){
    console.log("hi!");
}
doSomething(sayHi); */

/*------------------------**********-----------------------------*/
// E-2: An example of callback principle, marking grades based on number

function getGrade(score, callback){
    let grade;
    switch(true){
        case score>=90:
            grade="A";
            break;
        case score>=80:
            grade="B";
            break;
        case score>=70:
            grade="C";
            break;
        case score>=60:
            grade="D";
            break;
        default:
            grade="F";
    }
    callback(grade);
}
getGrade(76,judge);

function judge(grade){
    switch(true){
        case grade == "A":
            console.log(`You got an ${grade}, : amazing!`);
            break;
        case grade == "B":
            console.log(`You got a ${grade}, : well done!`);
            break;
        case grade == "C":
            console.log(`You got a ${grade}, : alright.!`);
            break;
        case grade == "D":
            console.log(`You got a ${grade}, :  hmm...!`);
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}