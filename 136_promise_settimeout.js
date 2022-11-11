// promise && settimeout



// I want to resolve / reject promise


function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(() => {
            if (value) {
                resolve();
            } else {
                reject();
            }

        }, 2000)
    })
}


// .then microtask queue me tabhi aayga jab resolve ya reject ho jayga thats why setTimeout pehle chala
myPromise().then(() => {
    console.log("Sucessful....");
}).catch(() => {
    console.log("Faliure.....");
})