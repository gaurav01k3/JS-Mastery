// object destructuring

const band = {
    bandName: "hustle",
    famousSong: "tera pyar sabbo",
    year: 1982,
    anotherSong: "rolla"
}

// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

// OR 


// bandName will be alias as nameBand
const { bandName: nameBand, famousSong, ...restProps } = band;
console.log(nameBand, famousSong);

console.log(restProps);

