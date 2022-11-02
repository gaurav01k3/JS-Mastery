//Closure exmaple -2

function hello(x) {
    const a = "varA";
    const b = "varB";

    return function () {
        console.log(a, b, x);
    }
}

const ans = hello("arg"); // x,a,b bhi sath me reuturn ho jaynge
ans();