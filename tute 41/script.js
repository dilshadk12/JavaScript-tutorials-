console.log(document.getElementsByTagName(`span`)[0]); 
console.dir(document.getElementsByTagName(`span`)[0]); // return as an object

let x= document.getElementsByTagName(`span`)[0];
console.log(x);

let y=document.getElementsByTagName(`span`)[0];
console.log(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

//console.log(first.innerHTML);  // only valid for element nodes

// or

// first.innerHTML="hey this is new html";
// console.log(first.innerHTML);

console.log(first.outerHTML);  // get the element tag along with content

console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log(document.body.textContent);




