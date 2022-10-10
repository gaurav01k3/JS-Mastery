// callback function

function func2() {
    console.log("inside callback line 1");
}

function myfunc(callback) {
    console.log("hello from myfunc....");
    callback();
}

myfunc(func2);