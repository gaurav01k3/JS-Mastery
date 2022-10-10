// every method

const numbers = [1, 2, 3, 4, 5];

// callback will retrun true or false 
// if every return value is true then only res will be true else false

// means in this case if every number is even
const res = numbers.every((num) => num % 2 == 0);

console.log(res);


//Realistic example

const userCart = [
    { prodId: 1, prodName: "mobile", price: 12000 },
    { prodId: 2, prodName: "tab", price: 6000 },
    { prodId: 3, prodName: "laptop", price: 2000 }
]


// aim : check every price <30000

const isLess30000 = userCart.every((user) => {
    return user.price < 30000;
})

console.log(isLess30000);