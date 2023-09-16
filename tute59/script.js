// async function hello() {
//     return 5;
// }
// hello().then((x) => {
//     alert(x);
// })

async function Weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40 deg");
        }, 2000)
    })

    let MumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 deg");
        }, 5000)
    })
    // delhiWeather.then(alert);
    // MumbaiWeather.then(alert);
    console.log("Fetching Delhi Weather Please wait...");
    let delhi_W = await delhiWeather;
    console.log("Fetched Delhi Weather: " + delhi_W);

    console.log("Fetching Delhi Weather Please wait...");
    let mumbai_W = await MumbaiWeather;
    console.log("Fetched Mumbai Weather: " + mumbai_W);
    return [delhi_W, mumbai_W];   // it will wait for both the promise to resolve
}

console.log("Welcome to Weather control room")
let a = Weather();
a.then((value) => {
    console.log(value);

})
