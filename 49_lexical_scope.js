// lexical scope and environment

function myApp() {

    const myVar = "value1"

    // lexical environment of myfunc is myApp
    function myfunc() {
        const myVar = "value59";
        console.log("inside myfunc..", myVar); // if myVar is not found in myfunc then it will search its lexical scope means inside its parent
        const myfunc1 = function () {
            console.log(myVar);
        }

        myfunc1();
    }

    const myfunc2 = () => { }

    console.log(myVar);
    myfunc();
}

myApp();