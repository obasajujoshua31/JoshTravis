'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var todos = [{
  id: 1,
  todo: 'sweep the house',
  completed: false
}, {
  id: 2,
  todo: 'Prepare for bootcamp',
  completed: false
}, {
  id: 3,
  todo: 'wash  my clothes',
  completed: true
}, {
  id: 4,
  todo: 'Watch Arsenal Versus Liverpool',
  completed: false
}];
var ID = 4;
var getOneTodo = function getOneTodo(todoId) {
  var allTodos = [].concat(todos);
  return allTodos.find(function (todo) {
    return todo.id === todoId;
  });
};

var addNewTodo = function addNewTodo(todo) {
  ID += 1;
  var newTodo = {
    id: ID,
    todo: todo,
    completed: false
  };
  return [].concat(todos, [newTodo]);
};
var removeTodo = function removeTodo(todoId) {
  var allTodos = [].concat(todos);
  return allTodos.filter(function (todo) {
    return todo.id !== todoId;
  });
};
var toggleTodo = function toggleTodo(todoId) {
  var allTodos = [].concat(todos);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allTodos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var todo = _step.value;

      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return allTodos;
};
exports.getOneTodo = getOneTodo;
exports.addNewTodo = addNewTodo;
exports.removeTodo = removeTodo;
exports.todos = todos;
exports.toggleTodo = toggleTodo;