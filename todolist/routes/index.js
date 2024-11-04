var express = require('express');
var Task = require("../model/Tasks");
var TaskSchema = require("../validators/TaskValidator");
const Joi = require("joi");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let obj = Task.getElementById(req.query.tid);
  res.render('index', { tasks: Task.list(), task: obj });
});

router.post("/tarefas", function (req, res){
    const { error, value } = TaskSchema.validate(req.body);
    if (error) {
      res.render('index', { tasks: Task.list(), erro: "Dados incompletos" });
      return;
    }
    
    const { id, nome, priority } = value;
    if (id === undefined) {
      // Inserir
      Task.new(nome, priority);
    } else {
      // Alterar
      Task.update(id, nome, priority);
    }
    res.redirect("/");
});

router.get('/tarefas/finalizar/:id', function(req, res) {
  const { id } = req.params;
  if (Task.delete(id)) {
      res.redirect('/');
  } else {
      res.send("Falha ao finalizar a tarefa");
  }
});

router.get('/tarefas/ordenadas', function(req, res) {
    res.render('tasks', { tasks: Task.listSorted() });
});

router.get('/tarefas/contagem', function(req, res) {
    res.render('count', { count: Task.count() });
});

router.get('/tarefas/finalizar/:id', function(req, res) {
    const { id } = req.params;
    if (Task.delete(id)) {
        res.redirect('/tarefas/ordenadas');
    } else {
        res.send("Falha ao finalizar a tarefa");
    }
});

module.exports = router;
