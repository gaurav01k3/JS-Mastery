// reduce

const numbers = [1, 2, 4, 5, 6];

// aim : to sum of all numbers to learn reduce

// const sum = numbers.reduce((accumulator, curVal) => {
//     return accumulator + curVal;
// },0) // initial value of acuumulator will be 0

// console.log(sum);

// accumulator , currentValue , retrun
//      1           2              3
//      3           4              7
//      7           5              12
//      12          6              18


const userCart = [
    { prodId: 1, prodName: "mobile", price: 12000 },
    { prodId: 2, prodName: "tab", price: 6000 },
    { prodId: 3, prodName: "laptop", price: 2000 }
]


const sumPrice = userCart.reduce((totPrice, curProd) => {
    return totPrice + curProd.price;
}, 0)

console.log(sumPrice);