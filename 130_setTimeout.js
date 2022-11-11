
// setTimeout is a function of Web browser 

// synchronous programming vs asynchronous programming

//JS is 
// Synchronous programming language &
// Single threaded

// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");


// set timeout

// setTimeout is not provided by JS it is provided by the web browser through Web API
// console.log("Script Start");

// setTimeout(()=>{
//     console.log("inside setimeout");
// },1000);

// console.log("Script End");


// now if 0 ms 
// bhale hi 0 ms ho lekin jab browser callback dega wapis then event loop wait krega GEC ke khali hone ka then setTimeout ka function run karega callback queue se nikalke
console.log("Script Start");

// setTimeout(()=>{
//     console.log("inside setimeout");
// },0);


// JS setTimeout ko Wen API ko deke ek id return kr dega joki cancel krne ke kaam aaygi
const id = setTimeout(() => {
    console.log("inside setimeout");
}, 1000);

for (let i = 0; i < 1000; i++) {
    console.log("hello");
}

console.log("set timeout id is", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script End");

