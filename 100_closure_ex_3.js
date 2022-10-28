// closure exmaple 3


// x pow y

function myfunc(y) {
    return function (x) {
        return x ** y;
    }
}

// or 
// const myfunc = y => x => x ** y;


const poww = myfunc(3);
console.log(poww(2));
