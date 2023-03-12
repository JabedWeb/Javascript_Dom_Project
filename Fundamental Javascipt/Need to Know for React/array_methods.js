
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];
// map
/**
 * map() method creates a new array with the results of calling a provided function on every element in the calling array.
 * returns a new array
 */
const productNames = products.map(product => product.name); // [ 'gold star', 'mushroom', 'green shells', 'banana skin', 'red shells' ]
console.log(productNames); // [ 'gold star', 'mushroom', 'green shells', 'banana skin', 'red shells' ]


// forEach
/**
 * forEach() method executes a provided function once for each array element.
 * returns undefined
 */
products.forEach(product => console.log(product.name)); //gold star, mushroom, green shells, banana skin, red shells


// filter
/**
 * filter() method creates a new array with all elements that pass the condition implemented by the provided function.
 * returns a new array
 */

const filteredProducts = products.filter(product => product.price > 30); // [ { name: 'mushroom', price: 40 }, { name: 'red shells', price: 50 } ]
console.log(filteredProducts); // [ { name: 'mushroom', price: 40 }, { name: 'red shells', price: 50 } ]
// find
/**
 * find() method returns the value of the first element 
 * returns a single value
 */
const foundProduct = products.find(product => product.name === 'mushroom'); // { name: 'mushroom', price: 40 }
console.log(foundProduct); // { name: 'mushroom', price: 40 }

// sort
/**
 * sort() method sorts the elements of an array in place and returns the sorted array.
 * returns a new array
 */
products.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    } else {
        return -1;
    }
});
console.log(products); 
