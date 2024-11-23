const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const tasks = req.session.tasks || [];
  res.render('tasks', { tasks, user: req.session.user });
});

router.post('/add', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/auth/login');
  }
  const tasks = req.session.tasks || [];
  tasks.push({ name: req.body.name, group: req.body.group });
  req.session.tasks = tasks;
  res.redirect('/tasks');
});

module.exports = router;
