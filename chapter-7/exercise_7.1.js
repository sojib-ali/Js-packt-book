class Person{
    constructor(firstname,lastname){
        this.x=firstname;
        this.y=lastname;
    }
    fullname(){
        // return(concat(this.x,this.y));
        return `${this.x} ${this.y}`;
    }
}
let p1=new Person("Josephine","Langford");
let p2=new Person("Hania", "Amir");
let j=p1.fullname();
let k=p2.fullname();

console.log(`Hello ${j}`);
console.log(`Hello ${k}`);
