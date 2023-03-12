

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

//template literal
const about=`My name is ${person.name} and I am ${person.age} years old. I live in ${person.address.city}.`;

// arrow function
const sayHello = (name) =>`Hello ${name}`;
// arrow function with multiple parameters
const sayHello2 = (name, age) =>`Hello ${name} you are ${age} years old`;
// arrow function with no parameters

console.log(about);//my name is john and i am 30 years old. i live in boston.
console.log(sayHello('John'));
console.log(sayHello2('John', 30)); //hello john you are 30 years old

//spread operator
const hobbies = ['movies', 'music'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);//movies music

const newHobbies = [...hobbies, 'sports'];
console.log(newHobbies);//[ 'movies', 'music', 'sports' ]
console.log(hobbies);

//spread operator with person object
const {name, age, address : {city}, ...rest} = person;
console.log(name, age, city);//john, 30, boston

//rest variable will contain all the properties that are not destructured
console.log(rest);//{ hobbies: [ 'music', 'movies', 'sports' ],

