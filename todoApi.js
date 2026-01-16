const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to read JSON data

// In-memory task storage
let todos = [];
let idCounter = 1;

//
// CREATE a task
//
app.post('/todos', (req, res) => {
    const task = {
        id: idCounter++,
        title: req.body.title,
        completed: false
    };
    todos.push(task);
    res.status(201).json(task);
});

//
// READ all tasks
//
app.get('/todos', (req, res) => {
    res.json(todos);
});

//
// UPDATE a task
//
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ message: 'Task not found' });
    }

    todo.title = req.body.title ?? todo.title;
    todo.completed = req.body.completed ?? todo.completed;

    res.json(todo);
});

//
// DELETE a task
//
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: 'Task deleted' });
});

// Start server
app.listen(PORT, () => {
    console.log(`TODO API running on http://localhost:${PORT}`);
});
