//cheapest phone

var phone = [{
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
    },
    {
        name: 'htc h81',
        price: 25000,
        camera: 12,
        storage: 32
    },
    {
        name: 'iphone 5s',
        price: 65000,
        camera: 16,
        storage: 32
    },
    {
        name: 'oppo a2',
        price: 17000,
        camera: 8,
        storage: 16
    },
    {
        name: 'vivo v9',
        price: 19000,
        camera: 8,
        storage: 32
    },
    {
        name: 'realme 1',
        price: 16000,
        camera: 8,
        storage: 16
    },
    {
        name: 'oneplus 5',
        price: 30000,
        camera: 16,
        storage: 64
    },
];



const cheapestPhone = (phone) => {
    var cheapest = phone[0];
    for (var i = 0; i < phone.length; i++) {
        if (phone[i].price < cheapest.price) {
            cheapest = phone[i];
        }
    }
    return cheapest;
}

let CheapestPhone = cheapestPhone(phone)

console.log(CheapestPhone);