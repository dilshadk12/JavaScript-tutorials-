// let btn = document.getElementById("btn");

// btn.addEventListener('click', function (e) {
//     alert("hello");
// })

// btn.addEventListener('click', function (e) {
//     alert("Hiiii");
// })

// remove an Event Listener
let x = function (e) {
    console.log(e.target);  // output what it is targetting on click
    alert("Hello");
}
let y = function (e) {
    alert("Hiiii");
}
btn.addEventListener('click', x);

// btn.addEventListener('click', y);

// let a = prompt("Enter 2 to remove first event Listener");
// if (a == "2") {
//     btn.removeEventListener('click', x);
// }
