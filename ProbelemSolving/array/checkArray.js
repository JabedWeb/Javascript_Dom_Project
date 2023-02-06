let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(checkArray(array));

function checkArray(array) {
    if (toString.call(array) === "[object Array]") {
        return true;
    }
    return false;
}