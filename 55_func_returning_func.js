// function returning function

function myfunc() { // higher order function
    function hello() {
        return "hello";
    }
    return hello; // retruning function
}

const res = myfunc(); // res becoming function expression

console.log(res());