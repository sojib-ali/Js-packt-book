// cars=["Fiat", "Toyota", "Renault", "Volkswagen"];

// for(var i=1;i<cars.length;i++){
//     console.log(cars[i]);
// }

/* Practice excercise 3.1 
let shopping_list=["Milk", "Bread", "Apples"];
console.log(`length of the list=`,shopping_list.length);

shopping_list[1]= "Bananas";
console.log([shopping_list]); */

/*let arr_shapes = ["circle", "triangle", "rectangle", "pentagon"];
arr_shapes.splice(2,0,"square","trapezoid");
console.log(arr_shapes);

arr_shapes.splice(2, 3,"square", "trapezoid");
console.log(arr_shapes); */

/* 1st argument means - where to insert/delete
   2nd argument means - how many elements need to delete/insert */ 

// arr2=[2,3]; you can add array as well
/* swap using slice 
let variable=arr_shapes[0];
arr_shapes.splice(0, 1, arr_shapes[2]);
arr_shapes.splice(2,1, variable);
console.log(arr_shapes);
*/

/* practice excercise 3.2 
shopping_list=["Milk", "Bread", "Apples"];
shopping_list.splice(1,1,"Bananas", "Eggs");
shopping_list.splice(3,1);
shopping_list.sort();
let find_index=shopping_list.indexOf("Milk");
// console.log(find_index);

shopping_list.splice(1,0,"Carrots", "Lettuce");

new_shopping_list=["Juice", "Pop"];
shopping_list.splice(5,0,...new_shopping_list, ...new_shopping_list);

console.log(shopping_list); */

/* practice excercise 3.3 

single_array=[1,2,3];
mult_array=[single_array, single_array, single_array];
// [1,2,3],[1,2,3], [1,2,3]
let value=mult_array[2][1];
console.log(value);

*/

/* practice excercise 3.4 */

 /*my_car = {
    maker: "mult_array",
    model: "x",
    color:"white",
    zero_to_sixty: 3

};

my_car.color="blue";
value_color=my_car.color;

console.log(value_color); */

/* Arrays in objects 

company = {
    company_name: "Healthy Candy",
    activities: ["food manufacturing", "improving kids's health", "manufacturing toys"],

    address:{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    years_of_establishment: 2021
};

let activity = company.activities[1];
console.log(activity); */

/* objects in arrays */

