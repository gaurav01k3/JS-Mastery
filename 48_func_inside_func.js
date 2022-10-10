// function inside function

const app = () => {

    const funcOne = () => {
        console.log("hello from funcOne..");
    }

    const funcTwo = () => {
        console.log("hello from funcTwo..");
    }

    console.log("inside app...");

    funcOne();
    funcTwo();
}

app();