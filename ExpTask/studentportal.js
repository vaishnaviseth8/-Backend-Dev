const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let students = [
    { id: 1, name: "Vaishnavi", marks: 85, grade: "A" },
    { id: 2, name: "Manvi", marks: 45, grade: "C" },
    { id: 3, name: "Krish", marks: 30, grade: "F" }
];

app.get("/students", (req, res) => {
    res.render("students", { students: students });
});

app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.send("Student not found");
    }

    res.render("result", { student: student });
});

app.get("/add-student", (req, res) => {
    res.render("add");
});

app.post("/add-student", (req, res) => {
    const { name, marks, grade } = req.body;

    const newStudent = {
        id: students.length + 1,
        name: name,
        marks: parseInt(marks),
        grade: grade
    };

    students.push(newStudent);

    res.redirect("/students");
});

app.listen(8000, () => console.log("server started"));
