const fs =require("fs");
const readStream=fs.createReadStream("./input.txt",{
    encoding:"utf-8"
});
const writeStream=fs.createWriteStream("./output.txt");
readStream.pipe(writeStream);
console.log("File copied using stream and pipe");