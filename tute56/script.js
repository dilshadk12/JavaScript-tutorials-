


// let p1 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//             console.log("resolve after 3 seconds");
//             resolve(56);  // any randome value you want to print
//       }, 2000);
// })

// p1.then((value) => {
//       console.log(value);  // value - 56 : to confirm that task is resolved
//       let p2 = new Promise((resolve, reject) => {    // custome promise inside promise
//             setTimeout(() => {
//                   resolve("promise2");

//             }, 2000);
//       })
//       return p2;

// }).then((value) => {
//       console.log("we are done");
//       return 2;

// }).then((value) => {
//       console.log("we are done finally");
// })

//  Quiizz

// Create a loadscript function with promise

const loadscript = (src) => {
      return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.type = "text/javascript";
            script.src=src;
            document.body.appendChild(script);
            script.onload = () => {
                  resolve("script Loaded");
            }
            script.onerror = () => {
                  reject(0);
            }
      })
}
let p3 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
p3.then((value) => {
      console.log(value);
}).catch((error) => {
      console.log("Problem loading the script")
})