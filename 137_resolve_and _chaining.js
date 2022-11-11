// Promise.resolve
// Promise chaining

// const val = Promise.resolve(5); // this will return promise to val and now can use .then() method
// val.then((val)=>{
//     console.log(val);
// })


function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}


// .then() hamesha promise retrun krta h , to ham promise ki chain create kr sakte h  

myPromise().then((val) => {
    console.log(val);
    val += "bar";
    return val; // returning the promise internally like
    // return Promise.resolve(val);
}).then((val) => {
    console.log(val);
})