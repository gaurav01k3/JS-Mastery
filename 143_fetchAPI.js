const URL = "https://jsonplaceholder.typicode.com/posts";


fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => { // res me data nhi h object h 
        if (res.ok)
            return res.json(); // res.json me data h pr ye bhi ek promise retrun krta h to ise return krdo
        else {
            throw new Error("Something went wrong .....") // ab ye catch ko bhej rhe h
        }
    }).then((data) => {
        console.log(data); // ab milega data
    })
    .catch((error) => {
        console.log("inside catch.....");
    }) // fetch me catch sirf netwok error me chalta h to jum 404 type errors ko bhi .then me check krenge .ok method ko check krke ki false h ya true