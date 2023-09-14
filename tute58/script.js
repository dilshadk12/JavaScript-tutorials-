let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 4000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2");
        reject(new Error("Error occurred"));
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});

// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })


// now if we want to see all three value togrther when finished

// let promise_all = Promise.all([p1, p2, p3]); // if any promise get rejected then it will not run
// promise_all.then((value)=>{
//     console.log(value);
// })

// if we want to run remaining promise although a promise get rejected then

// let promise_all = Promise.allSettled([p1, p2, p3]);
// promise_all.then((value)=>{
//     console.log(value);
// });



// show result of promise which get fulfilled first

// let promise_all = Promise.race([p1, p2, p3]);
// promise_all.then((value) => {
//     console.log(value);
// });



// if we want to print a value although an error is still there  
// let promise_all = Promise.any([p1, p2, p3]);
// promise_all.then((value) => {
//     console.log(value);
// });


// let promise_all = Promise.resolve(7);
// promise_all.then((value) => {
//     console.log(value);
// });


let promise_all = Promise.reject(new Error("Hey"));
promise_all.then((value) => {
    console.log(value);
});

