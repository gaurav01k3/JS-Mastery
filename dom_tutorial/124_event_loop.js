
// event loop

console.log("script start!!!");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num = 0;
        for(let i=0;i<=1000000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    })
})

let out = 0;
for(let i=0;i<=1000000000;i++){
    out+=i;
}

console.log("out is",out);
console.log("script end!!!");

// jb JS ENGINE ko dikhega ki events lagane h to wo kam wo WEB API ko de dega ki jb user event kre to mujhe call back de diyo.bg-color

// ab wo baaki ka code execute kr dalega
// Jb user events kr dega to wo events ekdum ni ho jaynnge pehle call back queue me lag jaynge
// EVENT LOOP naam ka banda un events ki callback queue pe nazar rakhkhega ki jaise hi GEC khali ho then wo unhe ek ek krke execute krne ko dal de

