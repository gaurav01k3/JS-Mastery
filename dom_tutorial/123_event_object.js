// event object


// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(eventObj){
//     console.log(this);
//     console.log(eventObj);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 

// Browser 2 kaam krega 

// 1. JS engine ko call back dega ki perform kr.
// 2. Jo event perform hua h uski info ek "event object" ki form me dega.



const allButtons = document.querySelectorAll('button');


// we are using arrow function just because event to ye bhi recieve krega hi na
for(let btn of allButtons){
    btn.addEventListener("click",(e)=>{ 
        console.log(e.currentTarget); // target or currentTarget
    })
}