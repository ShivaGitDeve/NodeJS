const fs = require('fs/promises')

const readFile = async () => {
    try {
        const data = await fs.readFile('data.txt', 'utf-8')
        console.log("File content: ", data)
    } catch (error) {
        console.error("error")
    }
}
    readFile();