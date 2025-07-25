const fetchData = (callback) => {
    setTimeout(() => {
        callback("Data fetched form DB")
    }, 3000)
}

console.log("Start");

fetchData((data) => {
    console.log(data);
})

console.log("End");