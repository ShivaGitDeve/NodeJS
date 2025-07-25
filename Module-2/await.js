const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 3000)
    });
}

const main = async () => {
    console.log("Start")
    const data = await fetchData(); // wait here
    console.log(data);

    console.log("End");
}

main();