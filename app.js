import express from 'express';
import {
  addNewTodo, getOneTodo, removeTodo, todos, toggleTodo,
} from './data';

const PORT = process.env.PORT || 5200;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  res.json(todos);
});
app.get('/api/:id', (req, res) => {
  const todoId = req.params.id;

  const data = getOneTodo(parseInt(todoId, 10));
  if (!data) {
    res.status(404).send({
      error: 'it is not found',
    });
  } else {
    res.json(data);
  }
});

app.post('/api/add', (req, res) => {
  const newTodo = req.body.todo;
  const data = addNewTodo(newTodo);
  res.json(data);
});

app.put('/api/:id/toggle', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const data = toggleTodo(todoId);
  if (!data) {
    res.json({
      error: 'the id is not found',
    });
  }
  res.json(data);
});
app.delete('/api/:id/remove', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const data = removeTodo(todoId);

  if (data.length === 4) {
    res.status(404).send({
      error: 'The id is not found',
    });
  } else {
    res.json(data);
  }
});
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
export default app;
