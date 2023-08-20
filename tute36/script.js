// change the card title to red


// By Id
// let c_title = document.getElementById("first-card");
// c_title.style.color = "red";


// let c_titles = document.querySelectorAll(".card-title"); // . for class and # for id
// c_titles[0].style.color="blue";
// c_titles[1].style.color="red";
// c_titles[2].style.color="green";
// // we have put 0 because otherwise it will get all card-title element and 
// // // we need this this perticular title that has 0 as index value 


let card_title = document.getElementsByClassName("card-title");
card_title[0].style.color = "red";
card_title[1].style.color = "green";
card_title[2].style.color = "blue";

// selecting perticuler element

document.querySelector(".dilshad_class").style.color = "black";
document.querySelector(".dilshad_class").style.background = "cyan";

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
