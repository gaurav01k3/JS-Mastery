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


// function (x) {
//     if (a == 0) {
//         console.log("Hi , you called me!", x);
//         a++;
//     } else {
//         console.log("Main ek baar call ho chuka hu!!");
//     }
// } ye pura function uthke myfunc1 me aa jayga , aur an iska khudka a hoga

const myfunc1 = func();
myfunc1("func1");
myfunc1("func1"); // ye apna a change kr dega
myfunc1("func1"); // ye apna a change kr dega