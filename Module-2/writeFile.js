const fs = require('fs/promises')

const writeFile = async () => {
    try {
        await fs.writeFile('output data', 'This is conttent written using Node.js!')
        console.log("File written successfully");
    } catch (error) {
        console.error("error")
    }
}

writeFile();