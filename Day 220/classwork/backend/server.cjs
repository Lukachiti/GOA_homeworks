const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3000;
let todos = [];
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(200).json({ message: 'Item deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});