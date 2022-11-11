function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(() => {
            if (value) {
                resolve("hello");
            } else {
                reject();
            }

        }, 2000)
    })
}

myPromise().then(() => {
    console.log("Sucessful....");
}).then((val) => {
    console.log();
    console.log("SucessS.....");
})