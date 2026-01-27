// read stream
// const fs= require("fs");
// const readStream=fs.createReadStream("./sample.txt",{
//     encoding:"utf-8",
//     highWaterMark:64*1024
// });
// readStream.on("data",(chunk)=>{
//     console.log("chunk recieved:", chunk.length);

// });
// readStream.on("end",()=>{
//     console.log("file reading complete");
// });

 
// write stream
// const fs=require("fs");
// const writeStream=fs.createWriteStream("./sample.txt");
// writeStream.write("hello gla\n");
// writeStream.write("welcome to streaming\n");
// writeStream.end();


//transform stream
const fs= require("fs");
const{Transform}=require("stream");
const upperCaseTransform= new Transform({
    transform(chunk,encoding,callback){
        const modifiedData=chunk.toString().toUpperCase();
        this.push(modifiedData);
        callback();
    }
})

//pipe flow
fs.createReadStream("./sample.txt")
.pipe(upperCaseTransform)
.pipe(fs.createWriteStream("./log.txt"));