

const rootNode = document.getRootNode();
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[1];


// console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.parentNode);
// console.log(headElementNode.childNodes);
console.log(headElementNode.nextElementSibling);

// sibling relationship
// by-default browser set white spaces to normal

// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);