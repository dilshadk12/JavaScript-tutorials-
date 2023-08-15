// console.log(console);

// //console.assert(5>10);   // Error

// console.assert(15 > 10);

// console.clear();

// obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// console.table(obj);

// console.warn("Access Dnied");

// console.info("This is an important info");

console.time("forLoop");
for (let i = 0; i < 5; i++) {
  console.log(100);
}
console.timeEnd("forLoop");



console.time("WhileLoop");
let j=0;
while(j<5)
{
    console.log(100);
     j++;
}
console.timeEnd("WhileLoop");

