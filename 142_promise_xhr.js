const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error("Something went wrong!!!"));
            }
        }

        xhr.onerror = function () {
            reject(new Error("Something went wrong!!!"));
        }

        xhr.send();
    })
}


sendRequest("GET", URL).then((data) => {
    // console.log(typeof data);
    const res = JSON.parse(data);
    // console.log(res);
    return res
}).then((res) => {
    // console.log(res);
    return res[0];
}).then((data) => {
    console.log(data);
})


// or
// sendRequest("GET", URL)
//     .then(response => {
//         const data = JSON.parse(response);
//         // console.log(data)
//         return data;
//     })
//     .then(data => {
//         const id = data[3].id;
//         return id;
//     })
//     .then(id => {
//         const url = `${URL}/${id}ssss`;
//         return sendRequest("GET", url);
//     })
//     .then(newResponse => {
//         const newData = JSON.parse(newResponse);
//         console.log(newData);
//     })
//     .catch(error => {
//         console.log(error);
//     })