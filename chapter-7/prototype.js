class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    great(){
        console.log("Hi there!");
    }
}
Person.prototype.whatever=function(){
    console.log(`Hi I'm ${this.firstname}`);
};

Person.prototype.favColor="green";

let p = new Person("Josephine", "Langford");
console.log(p.favColor);
p.whatever();