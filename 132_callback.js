// understand 

// function myfunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }


// myfunc(()=>{
//     console.log("I am callback");
// })

function getTwoNumbersAndAdd(number1, number2, onSucess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        // addTwoNumbers(number1, number2);
        onSucess(number1, number2);
    } else {
        onFailure();
    }
}

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

getTwoNumbersAndAdd(4, "as", (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong data type");
});