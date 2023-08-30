let p1 = new Promise((resolve, reject) => {
    console.log("promise is panding");
    setTimeout(() => {
        // console.log("I am a promise and i am fulfilled");
        resolve(true);

    }, 3000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is panding");
    setTimeout(() => {
        //console.log("I am a promise and i am rejected");
        reject(new Error("I am an error"));
    }, 3000)
})

// console.log(p1, p2);

p1.then((value) => {         // here value is true because of resolve  
    console.log(value);
})
p2.catch((error)=>{
    console.log("some Error occured in p2");
})