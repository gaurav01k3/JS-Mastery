const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

// xhr is a object that will be used to make requests asynchronously 

// step 1 :  
xhr.open("GET", URL); // Sets the request method, request URL, and synchronous flag.



// basically onreadystatechange jo h ye ek function mangta h jo ki har state change hone pr fire krdegi us function ko
// basically 4 state hoti h 
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         console.log(xhr);
//         const res = xhr.response;
//         const data = JSON.parse(res);
//         console.log(Array.isArray(data));
//         console.log(data);
//     }
// }

// upar wala all four states ko process karega par hame silf 4 state se matlab h

// so 

// it will on run when state will be 4 
xhr.onload = () => {
    const res = xhr.response;
    const data = JSON.parse(res);
    console.log(data);
}


xhr.send();



// aur ye upar ka sara kaam jo h asynchronous hoga 