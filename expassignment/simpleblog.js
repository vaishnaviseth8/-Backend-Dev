const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let posts = [
    { id: 1, title: "Vaishnavi First Post", content: "Hello this is my first blog" },
    { id: 2, title: "Second Post", content: "Learning Express is fun" }
];

app.get("/posts", (req, res) => {
    res.render("posts", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newPost = {
        id: posts.length + 1,
        title: title,
        content: content
    };

    posts.push(newPost);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    res.render("show", { post });
});

app.listen(8000, () => console.log("server started"));
