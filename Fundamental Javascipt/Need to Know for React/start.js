// how to declare a variable using let and const
// 6 basic condition in javascript 
//multiple condition

//object

const person = {
    name: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}


// some ways to access object
//dot notation
console.log(person.name, person.age);

//bracket notation
console.log(person['name']); 


//access by property name
let name_person = 'name';
console.log(person[name_person]);


//destructuring
const {name, age, address: {city}} = person;

