// Promises

// Promise kiya 
// Status : pending.....
// now after some time
// Fullfilled 
// or
// Rejected

console.log("Script start!!!!");

const bucket = ['coffee', 'chips', 'vegies', 'salt', 'rice'];

// Produce a promise - yr JS ka kaam h
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes('vegies') && bucket.includes('salt') && bucket.includes('rice')) {
        resolve('Fried Rice');
    } else {
        reject("Couldn't do it");
    }
    for (let i = 0; i < 4000; i++) {
        console.log("Hello start");
    }
})

console.log("hell");
console.log(friedRicePromise);
console.log("yeah");


// Consume :  ye browser ka kaam h
// friedRicePromise.then((riceReady) => {
//     console.log("Rice eating.......!!!", riceReady);
// }
//     // ,(error)=>{
//     //     console.log("Failure.........!!!!!");
//     // }
// ).catch(error => {
//     console.log("Failure.......!!", error);
// })


// // callback queue me jayga
// setTimeout(()=>{
//     console.log("Hello from setTimeout");
// },0)

// for(let i=0;i<100;i++){
//     console.log("Hello start");
// }

// console.log("Script end.....");


// NOTE  :  IMPORTANT
// Microtask queue has higher priority then callback queue , event loop pehle .then ko chala dega