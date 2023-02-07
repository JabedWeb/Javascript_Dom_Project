let cartProducts=[
    {
        name: 'samsung s5',
        price: 45000,
        
        camera: 10,
        storage: 32
    },
    {
        name: 'walton m32',
        price: 15000,
        camera: 8,
        storage: 16
    },
    {
        name: 'nokia n95',
        price: 8000,
        camera: 5,
        storage: 8

    }
]


function total(cartProducts){
    let total=0;
    for(let i=0;i<cartProducts.length;i++){
        total=total+cartProducts[i].price;
    }
    return total;
}


const total_price=total(cartProducts);

console.log(total_price);