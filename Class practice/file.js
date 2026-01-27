const fs= require("fs");
// const promises=require ("fs").promises;


// create file with synch function
// fs.writeFileSync("./file.txt","welcome to GLA");

//async
// fs.writeFile("./file.txt","welcome to gla university",(err)=> {});

// read file with sync
// const result=fs.readFileSync("./notes.txt","utf8");
// console.log(result);

//read file with async
// fs.readFile("./notes.txt","utf-8",(err,result)=>{ 
//     if (err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./file.txt",new Date().getDate().toLocaleString());

// fs.appendFileSync("./file.txt",`${Date.now()} Hey Vaishnavi \n`);

// copy file
// fs.cpSync("./file.txt", "./file_copy.txt");

//delete file
// fs.unlinkSync("./file_copy.txt");

// console.log(fs.statSync("./file.txt"));

// console.log(fs.statSync("./file.txt").isFile());

// create directory

// fs.mkdirSync("./new folder");

// fs.mkdirSync("./new subfolder1");
// fs.mkdirSync("./new subfolder2");

//  fs.rmdirSync("./new folder");


//read the document with async  
fs.readdir("./", (err,files)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log("files",files);
    }

}); 