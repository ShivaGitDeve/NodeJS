const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from db")
        }, 3000)
    })
}

console.log("start");

fetchData().then((data) => {
    console.log(data)
})

console.log("End")