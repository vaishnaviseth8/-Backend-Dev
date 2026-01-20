//JS Object (ko kese render krate hain server k andr)
// let user={
//     username:"vaishnavi",
//     email:"vaishnavi@gmail.com"
// }
// //JSON Object
// let json={
//     "username":"vaishnavi",
//     "email":"vaishnavi@gmail.com"
// }
//JSON.stringify(user) js object -> json string
//JSON.parse() json->string->json data

const http = require("http");

const server = http.createServer((req, res) => {
    //  Aapka JS Object
    let user = {
        username: "vaishnavi",
        email: "vaishnavi@gmail.com"
    };

    if (req.url === '/home') {
        // Content-Type ko "application/json" rakhein
        res.writeHead(200, { 
            "Content-Type": "application/json" 
        });

        //  JSON.stringify() use karein object ko string banane ke liye
        res.end(JSON.stringify(user));
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/home");
});