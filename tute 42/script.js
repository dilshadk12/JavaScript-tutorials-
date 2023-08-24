// To know id "first" has which class

let first=document.getElementById("first");

let a= first.getAttribute("class");
// console.log(a);  // o/p:= hey

// console.log(first.hasAttribute("class"));  // true because "first" has a "class" attribute
// console.log(first.hasAttribute("style"));

// first.setAttribute("hidden","true");  // it will hide the content inside div
// first.setAttribute("class","true sachin")

// first.removeAttribute("class");  // it will remove the class

// console.log(first.attributes);

console.log(first.dataset);
console.log(first.dataset.game);  // o/p: mario
console.log(first.dataset.player); // o/p : dilshad