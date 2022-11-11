// function returning promise

const bucket = ['coffee', 'chips', 'vegies', 'salt', 'rice'];

function ricePromise(){
    return new Promise((resolve, reject) => {
        if (bucket.includes('vegies') && bucket.includes('salt') && bucket.includes('rice')) {
            resolve('Fried Rice');
        } else {
            reject(new Error("Couldn't do it"));
        }
    })
}



ricePromise().then((riceReady) => {
    console.log("Rice is ready...!!!");
}
).catch(error => {
    console.log("Failure.......!!", error);
})