const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/users", (req, res) => {

    const users = [
        { id: 1, name: "Vaishnavi", city: "Agra" },
        { id: 2, name: "Manvi", city: "Delhi" },
        { id: 3, name: "Krish", city: "Mumbai" }
    ]

    const name = req.query.name

    if (name) {
        const filtered = users.filter((user) => {
            return user.name.toLowerCase().includes(name.toLowerCase())
        })
        return res.send(filtered)
    }

    res.send(users)
})

app.listen(8000, () => console.log("server started"))
