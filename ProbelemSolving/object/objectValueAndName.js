let shoppingCart ={
    book : "3",
    pen : "2",
    id : "ECG"
}

console.log(shoppingCart["book"]);

//for loop 
let keys=Object.keys(shoppingCart);
for(let i =0;i<keys.length;i++){
    let propertyName=keys[i];
    console.log(shoppingCart[propertyName]);
}

//for in loop
for(var property in shoppingCart){
    console.log(shoppingCart[property]);
}