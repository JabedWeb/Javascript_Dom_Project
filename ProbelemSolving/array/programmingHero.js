/**
* mindGame Problems(problem 1)
* mindGame function takes a positive number as input and
returns the result of the following operations on the number:
* @param {*} positive_number
* @returns output of the operation
*/
function mindGame(positive_number) {
    //check if the number is positive and not string
    if (positive_number < 0 || typeof (positive_number) == "string") {
        return "Invalid input.Please provide a positive number";
    }
    let output;
    output = positive_number * 3;
    output = output + 10;
    output = output / 2;
    output = output - 5;
    return output;
};
//test cases
/* console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33)); */
/**
* evenOdd Problems(problem 2)
* evenOdd function takes a string as input and check the string character and returns even or odd
(depending on the number of characters in the string)
* @param {*} EvenOrOddString
* @returns even or odd
*/
function evenOdd(EvenOrOddString) {
    //check if the input is string
    if (typeof (EvenOrOddString) != "string") {
        return "Invalid input.Please provide a string";
    }
    let output;
    if (EvenOrOddString.length % 2 == 0) {
        output = "even";
    } else {
        output = "odd";
    }
    return output;
}
//test cases
/* console.log(evenOdd("Phero"));
console.log(evenOdd("batch7"));
console.log(evenOdd("chatgpt"));
console.log(evenOdd(5)); */
/**
* isLGSeven Problems(problem 3)
* isLGSeven function takes a number as input and check the number and do some arithmetic operation
and returns the result of the following operations
* @param {*} number_data
* @returns result of the following operations
*/
function isLGSeven(number_data) {
    //check if the input is number
    console.log(typeof (number_data));
    if (typeof (number_data) != "number") {
        return "Invalid input.Please provide a number";
    }
    if (number_data - 7 < 7) {
        return number_data - 7;
    } else {
        return number_data * 2;
    }
}
//test cases
/* console.log(isLGSeven("Phero"));
console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15)); */
/**
* findingBadData Problems(problem 4)
* findingBadData function takes an array as input and check the array element and
returns the number of negative elements in the array
* @param {*} array_data
* @returns number of negative elements in the array
*/
function findingBadData(array_data) {
    //check if the input is array
    if (!Array.isArray(array_data)) {
        return "Invalid input.Please provide an array";
    }
    let count = 0;
    for (let i = 0; i < array_data.length; i++) {
        if (array_data[i] < 0) {
            count++;
        }
    }
    return count;
}
//test cases
/* console.log(findingBadData([ 1,2,5 ]));
console.log(findingBadData([2,-5,-7,-13]));
console.log(findingBadData([ -4, -9, -5, -33, -55 ]));
console.log(findingBadData("ok")); */
/**
* gemsToDiamond Problems(problem 5)
* gemsToDiamond function takes three number as input and check the number and
returns the total diamond (depend on diamond=(21*firstFriendGems+32*secondFriendGems+43*thirdFriendGems)>2000)
* @param {*} firstFriendGems
* @param {*} secondFriendGems
* @param {*} thirdFriendGems
* @returns total diamond
*/
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    //check if the input is number
    if (typeof (firstFriendGems) != "number" || typeof (secondFriendGems) != "number" || typeof (thirdFriendGems) != "number") {
        return "Invalid input.Please provide a number";
    }
    let totalDiamond = firstFriendGems * 21 + secondFriendGems * 32 + thirdFriendGems * 43;
    if (totalDiamond > 1000 * 2) {
        totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
}
//check the output of the function
/* console.log(gemsToDiamond(1,1,1));
console.log(gemsToDiamond(20,200,50));
console.log(gemsToDiamond(100,5,1)); */