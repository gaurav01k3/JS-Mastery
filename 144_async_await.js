// async await

// fetch(URL).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// })

const URL = "https://jsonplaceholder.typicode.com/post";

// function ke aage jab bhi async likhenge to wo ek promise return krta h always 
// or await always async ke sath hi chalega 

console.log("script start");


async function getPosts() { // or const getPosts = async ()=>{}
    const res = await fetch(URL); // agli line jabhi chalegi jab ye puri chal jaygi wait krega tabtak
    console.log("inside await...");
    if (!res.ok) {
        throw new Error("Something went wrong...")
    }
    const data = await res.json();
    return data;
}


getPosts().then((data) => {
    console.log("Hellooo"); // dhiyan rakhna fetch ke case me .then hamesha chalega but res.ok true ya false ho sakta h isliye alag se upar handle krna padega tabhi catch me jayga
    console.log(data);
}).catch((error) => {
    console.log(error);
})


console.log("script end");