
// // alert("Hello");
// // setTimeout(function () {
// //     alert("setInterval executed after 2 seconds")
// // }, 2000);

// document.write("Hello");
// let a = setTimeout(function () {
//     alert("setTimeout executed after 5 Seconds");
// }, 5000);
// let b = prompt("Enter Y to run the timeOut and  N  to clear the timeOut  ");
// if ("n" == b) {
//     clearTimeout(a);
// }
// console.log(a);  // setTime I'd


// setTimeout function   run function only once in 2 second

// const sum = (a, b, c) => {
//     console.log("Running setTimeout : sum is " + (a + b + c));
//     a + b + c;
// }
// setTimeout(sum, 2000, 5, 5, 1);


// setInterval function   run function every 2 second

const sum = (a, b, c) => {
    console.log("Running setInterval every 2 second : sum is " + (a + b + c));
    a + b + c;
}
setInterval(sum, 2000, 5, 5, 1);