const todos = [
  {
    id: 1,
    todo: 'sweep the house',
    completed: false,
  },
  {
    id: 2,
    todo: 'Prepare for bootcamp',
    completed: false,
  },
  {
    id: 3,
    todo: 'wash  my clothes',
    completed: true,
  },
  {
    id: 4,
    todo: 'Watch Arsenal Versus Liverpool',
    completed: false,
  },
];
let ID = 4;
const getOneTodo = (todoId) => {
  const allTodos = [...todos];
  return allTodos.find(todo => todo.id === todoId);
};

const addNewTodo = (todo) => {
  ID += 1;
  const newTodo = {
    id: ID,
    todo,
    completed: false,
  };
  return [...todos, newTodo];
};
const removeTodo = (todoId) => {
  const allTodos = [...todos];
  return allTodos.filter(todo => todo.id !== todoId);
};
const toggleTodo = (todoId) => {
  const allTodos = [...todos];
  for (const todo of allTodos) {
    if (todo.id === todoId) {
      todo.completed = !todo.completed;
    }
  }
  return allTodos;
};
export {
  getOneTodo, addNewTodo, removeTodo, todos, toggleTodo,
};
