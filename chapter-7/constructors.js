class Person {
    #firstname;
    constructor(firstname, lastname){
        this.#firstname=firstname;
        this.lastname=lastname;
    }
}

let p = new Person("Josephine", "Langford");
console.log("Hi", p.firstname, p.lastname);


