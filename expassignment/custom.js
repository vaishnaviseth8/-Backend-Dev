const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("home page");
});

app.use((req, res) => {
    res.status(404).render("notfound");
});

app.listen(8000, () => console.log("server started"));

