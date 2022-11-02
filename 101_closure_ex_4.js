// closure exmaple 4

function func() {
    let a = 0;
    return function (x) {
        if (a == 0) {
            console.log("Hi , you called me!", x);
            a++;
        } else {
            console.log("Main ek baar call ho chuka hu!!");
        }
    }
}


const myfunc1 = func();
myfunc1("func1");
myfunc1("func1");
myfunc1("func1");

const myfunc2 = func();
myfunc2("func2");
myfunc2("func2");
myfunc2("func2");
