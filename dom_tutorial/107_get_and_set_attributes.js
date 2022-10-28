// get and set attribute

const link = document.querySelector("a");

console.log(typeof link.getAttribute("href").slice(1));

link.setAttribute("href", "https://www.leetcode.com");
