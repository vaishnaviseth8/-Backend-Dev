const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/gallery", (req, res) => {

    const images = ["1.jpg", "2.jpg", "3.jpg"];

    res.render("gallery", { images });
});

app.listen(8000, () => console.log("server started"));
