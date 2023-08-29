// asynchronous programming example
// console.log("Start");
// setTimeout(function(){
//     console.log("Hey i am good");   // output:= Start
// },3000);                            //            End
// console.log("End");                 // Hey I am good



// Synchronos programming example
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favourite color?");
// console.log(a + "is" + b + "years old has" + c + "favourite color.")


// CallBacks

function loadScript(src, Callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with src:" + src);
        Callback(null, src);  // if successfully run tan give null in place of error
    }
    // Erroe Handling
    script.onerror = function () {
        console.log("Error Loading script with src: " + src);
        Callback(new Error("src got some error"));  // if erroe occured hello function will give the error 
    }
    document.body.appendChild(script);
}
function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello" + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", hello);