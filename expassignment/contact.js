const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.post("/contact", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    res.render("success", { name, email, message })
});

app.listen(8000, () => console.log("server started"));
