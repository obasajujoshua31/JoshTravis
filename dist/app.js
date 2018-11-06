'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.get('/api', function (req, res) {
  res.json(_data.todos);
});
app.get('/api/:id', function (req, res) {
  var todoId = req.params.id;

  var data = (0, _data.getOneTodo)(parseInt(todoId, 10));
  if (!data) {
    res.status(404).send({
      error: 'it is not found'
    });
  } else {
    res.json(data);
  }
});

app.post('/api/add', function (req, res) {
  var newTodo = req.body.todo;
  var data = (0, _data.addNewTodo)(newTodo);
  res.json(data);
});

app.put('/api/:id/toggle', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var data = (0, _data.toggleTodo)(todoId);
  if (!data) {
    res.json({
      error: 'the id is not found'
    });
  }
  res.json(data);
});
app.delete('/api/:id/remove', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var data = (0, _data.removeTodo)(todoId);

  if (data.length === 4) {
    res.status(404).send({
      error: 'The id is not found'
    });
  } else {
    res.json(data);
  }
});
app.listen(3000, function () {
  console.log('Server started at port 3000');
});
exports.default = app;