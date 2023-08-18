console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes); // it looks like an array but it is not an array but an Node list in real

// to convert it into an array
let arr= Array.from(document.body.childNodes)
console.log(arr);

console.log(document.body.childNodes[0]); // is equal to first child

console.log(document.body.hasChildNodes()); // will return true or false
