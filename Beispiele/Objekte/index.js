let name = "Michael";
let age = 41;

let person = {
    name: "Michael",
    age: 41
};

person["name"] = "Maria";

//Wird z.B.: vom User ausgewählt und in der 
//Variable gespeichert
let selection = "name";
console.log(person[selection]);

person.name = "Josef";