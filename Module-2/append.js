const fs = require('fs/promises')

const appendFile = async () => {
    try {
        await fs.appendFile('output data', '\nAppended line at ' + new Date())
        console.log('Line appended')
    } catch (error) {
        console.log('Error')
    }
};

appendFile();