const express = require("express")
const app = express()

app.use((req, res, next) => {
    const start = Date.now()

    res.on("finish", () => {
        const end = Date.now()
        console.log(req.method, req.url, end - start + "ms")
    })

    next()
})

app.get("/", (req, res) => {
    res.send("hello Vaishnavi")
})

app.listen(8000, () => console.log("server started"))
