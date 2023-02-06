let array=[1,2,3,4,5,6,7,8,9,10];
let n=3;
console.log(lastElements(array,n));

function lastElements(array, n) {
    if (n == null) 
        return array[array.length - 1];
    if (n < 0)
        return [];
    return array.slice(Math.max(array.length - n, 0));  
}


