const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./path/first.txt','utf-8')
const second = readFileSync('./path/second.txt','utf-8')
console.log(first,second)

writeFileSync(
    './path/result-sync.txt',
    `final result : ${first}, ${second}`, 
    {flag: 'a'}
)