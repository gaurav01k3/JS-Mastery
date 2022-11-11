// callbacks , callback hell, pyramid of doom
// asynchronous programming


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "red";
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple";
//     },1000)
// },1000)



// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// callback hell  
// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three"; 
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)

//       },1000)

//     },2000)

//   },2000)

// },1000)


function changeText(element, text, color, time, onSucess, onFailure) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSucess) {
                onSucess();
            }
        } else {
            onFailure();
        }
    }, time)
}


// callback hell , complete pyramid of dom 
changeText(heading1, "heading1", "green", 1000, () => {
    changeText(heading2, "heading2", "red", 1000, () => {
        changeText(heading3, "heading3", "blue", 1000, () => {
            changeText(heading4, "heading4", "silver", 1000, () => {
                changeText(heading5, "heading5", "gray", 1000, () => {
                    changeText(heading6, "heading6", "hotpink", 1000, () => {
                        changeText(heading7, "heading7", "yellow", 1000, () => {
                            console.log("Sucessfull!!!");
                        }, () => {
                            console.log("Failed!!!");
                        })
                    }, () => {
                        console.log("Failed!!!");
                    })
                }, () => {
                    console.log("Failed!!!");
                })
            }, () => {
                console.log("Failed!!!");
            })
        }, () => {
            console.log("Failed!!!");
        })
    }, () => {
        console.log("Failed!!!");
    })
}, () => {
    console.log("Failed!!!");
});
