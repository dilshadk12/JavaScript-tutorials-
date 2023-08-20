
let id1=document.getElementById("id1");

let sp1=document.getElementById("sp1");
console.log(id1.matches(".class"));  // false because there isn't any class name "class"
console.log(id1.matches(".box"));    // true because box is a class

console.log(sp1.closest(".box"));  // means if sp1 's closest selector has .box
                            // if not then check colsest selector of that closest selector

console.log(id1.contains(sp1)); // if id1 contains sp1:: true
console.log(sp1.contains(sp1)); // also true
console.log(sp1.contains(id1)); // false