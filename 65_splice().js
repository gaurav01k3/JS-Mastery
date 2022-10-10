// splice method
// start , delete how many ,  insert 

const myarray = [1, 2, 3, 4, 5, 6, 78];

// start from 2th and delete 3 elements the insert -1 at place of 3 elems
const res = myarray.splice(2, 3, -1);

console.log("original changed: ", myarray);

console.log("deleted items : ", res);
