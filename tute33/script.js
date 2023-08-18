console.log(document.body.firstChild);
a= document.body.firstChild;
console.log(a.parentNode); // return every node including ant text even comment
console.log(a.parentElement);// return a valid html argument
                             // means if parent is an element only then it will
                             // return a argument otherwise it will return null
console.log(a.firstChild.nextSibling)                             