const path = require('path');

// path seperator
console.log(path.sep);

const filePath = path.join('/path','subFolder','text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'/path','/subFolder','text.txt');
console.log(absolute);