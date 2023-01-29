let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 3;
console.log(firstArray(array,n));

function firstArray(array, n) {
    if (array == null) 
       return 0;
    if (n < 0)
       return [];
    return array.slice(0, n);  
}