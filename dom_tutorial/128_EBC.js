console.log("EBC");


const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;


// // Event bubbling
// // agar parent pe bhi same event laga hua h to wo bhi call ho jayga 

// Bubbling
// child.addEventListener("click",() => {
//     console.log("Bubbling on child");
// });
// parent.addEventListener("click",() => {
//     console.log("Bubbling on parent");
// });
// grandparent.addEventListener("click",() => {
//     console.log("Bubbling on grandparent");
// });
// body.addEventListener("click",() => {
//     console.log("Bubbling on body");
// });


// // Capturing
// child.addEventListener("click",() => {
//     console.log("Capturing on child");
// },true);
// parent.addEventListener("click",() => {
//     console.log("Capturing on parent");
// },true);
// grandparent.addEventListener("click",() => {
//     console.log("Capturing on grandparent");
// },true);
// body.addEventListener("click",() => {
//     console.log("Capturing on body");
// },true);


// pehele capturing hogi sabse bahar se then bubbling start ho jaygi andar se , ek cycle sa chalega



// Event Delegation

// child pe click krne par bhi grand parent ka call ho gya kyyuki unse deligate kr diya event
// grandparent.addEventListener("click",()=>{
//     console.log("You clicked something");
// })


// ab sirf grand parent pe listener add kiya h
// target me wo hi milega jispe hm click krenge bhale hi grand parent pe listener laga ho
grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
})


