// Sets (it is iterable)  -> OBJECT
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed

// main diff between set and array is
// unique items only (no duplicates allowed)

// we can pass iterables inside set
// const numbers = new Set([1, 2, 6, 7]);
// console.log(numbers);

// const st = new Set();
// st.add(1);
// st.add(2);
// st.add(3);
// st.add(4);
// st.add(5);
// st.add(6);
// st.add([1, 2, 2, 4, 4]);
// st.add([1, 2, 2, 4, 4]); // can be added as diff memo as above array


// if (st.has(1)) {
//     console.log('1 is present');
// }

// console.log(st);


// for (let el of st) {
//     console.log(el);
// }

const array = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7];


const uniqueElements = new Set(array);
//to calc length , do for of loop
console.log(uniqueElements);