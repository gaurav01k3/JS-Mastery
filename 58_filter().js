// filter method

const numbers = [1, 6, 3, 7, 9, 10];

// callback of filter function always retruns boolean value


const isEven = (num) => {
    return num % 2 === 0;
}


//filter(callback)
const arrayOfEven = numbers.filter(isEven); // returns the array of even numbers , all even will filter out

console.log(arrayOfEven);




