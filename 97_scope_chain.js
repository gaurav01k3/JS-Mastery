// lexical environment, scope chain


const lastName = "Kumar";

const printName = function () {
    const firstName = "Gaurav";

    function myfunc() {
        console.log(firstName); // pehle apne pass dhundega then apne upar , nhi mila to aur upar
        console.log(lastName); // ye apne lexcal evn me dekhega 
    }

    myfunc();
}

printName();