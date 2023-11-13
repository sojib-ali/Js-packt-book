class Dog{
    constructor(dog_name,weight,color,breed){
    this.x=dog_name;
    this.y=weight;
    this.color=color;
    this.breed=breed;
    }

    add(){
        return this.x+this.y;
    }

}
let dog=new Dog(4,5);
console.log(dog.add());

// console.log(dog.dog_name, "is a", dog.breed, "and weighs", dog.weight, "kg.", "and the color is", dog.color);

// let arr= new Array();
// console.log(typeof(arr));