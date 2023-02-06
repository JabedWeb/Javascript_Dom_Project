var number = "025468";

let dashArray=[]
for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0 && number[i - 1] % 2 == 0) {
        dashArray.push( "-", number[i] );
    }
    else {
        dashArray.push(number[i]);
    }
}

console.log(dashArray.join(""));