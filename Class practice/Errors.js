// Common Errors
// ENOENT- file not exist
// EACCES- permission denied  
// EEXIST- file already exist
// EISDIR-file expected , folder not exist

//error handling with call back

// const fs=require("fs");
// fs.readFile("./file.txt","utf8",(err,data)=>{
//     if(err){
//         if(err.code === "ENOENT"){
//             console.log("file not found");

//         }
//         return;
//     }
//     console.log(data);
// });

// error handling with async/await
const fsPromises=require("fs").promises;
async function readFileSafe(){
    try{
        const data=await fsPromises.readFile("./file.txt","utf8");
        console.log(data);
    }
    catch(err){
        console.log("error:", err.code);
    }
}

