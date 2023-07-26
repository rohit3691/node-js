const { readFile, writeFile } = require('fs');

readFile('./path/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return
    }
    const first = result;
    readFile('./path/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error)
            return
        }
        const second = result;
        writeFile('./path/asyncResult.txt',
            `this is the final Async result : ${first} and ${second}`,
            { flag: 'a' }, (error, result) => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log(result);
            })
    })
})