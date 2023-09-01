let p1 = new Promise((resolve, reject) => {
    // alert("Not Resolved");
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

p1.then(() => {
    console.log("Promise Resolved")
})

p1.then(() => {
    console.log("Hurray")
})