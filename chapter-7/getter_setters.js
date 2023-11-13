class Person{
    #x;
    #y;
    constructor(firstname,lastname){
        this.#x=firstname;
        this.#y=lastname;
    }
    get firstname(){
        return this.#x;
    }
    set firstname(firstname){
        // this.#x=firstname;
        if(firstname.startsWith("M")){
            this.#x=firstname;
        }else{
            this.#x="M" + firstname;
        }
    }
    get lastname(){
        return this.#y;
    }  
    set lastname(lastname){
        // if(lastname.startsWith("M")){
        //     this.#y=lastname;
        // }else{
        //     this.#y="M" + lastname;
        // }
        this.#y=lastname;
        
    }
}
let p=new Person("Josephine", "Langford");
p.firstname="Katherine";
// p.lastname="Amir";
console.log(p.firstname, p.lastname);
