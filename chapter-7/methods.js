class Person{
    constructor(firstname,lastname){
        this.x=firstname;
        this.y=lastname;
    }
    greet(){
        console.log(`Hi there! I'm ${this.x}`);
    }
    compliment(name, object){
        return `That's a wonderful ${object}, ${name}`;
    }
}
let p=new Person("Sojib", "Ali");
p.greet();
let compliment = p.compliment("Harry", "hat");
console.log(compliment);

