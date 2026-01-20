const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

function compressFile(inputFile) {
  if (!fs.existsSync(inputFile)) {
    console.error("File does not exist");
    return;
  }

  const outputFile = inputFile + ".gz";

  const readStream = fs.createReadStream(inputFile);
  const gzip = zlib.createGzip();
  const writeStream = fs.createWriteStream(outputFile);

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log(" File compressed successfully:", outputFile);
    });
}


compressFile("data.txt");
