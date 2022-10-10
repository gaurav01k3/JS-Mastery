// rest parameters


// function myfunc(a, b, ...c) { // c will be array of rest of all elements passed

//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }


// myfunc(1, 2, 3, 4, 5, 6, 7, 8);


function addAll(...arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    console.log(sum);
}


addAll(1, 2, 3, 56, 7, 8, 0);