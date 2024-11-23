const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    req.session.user = { username, role: 'admin' };
    res.redirect('/');
  } else if (username === 'user' && password === '1234') {
    req.session.user = { username, role: 'user' };
    res.redirect('/');
  } else {
    res.render('login', { error: 'Credenciais inválidas' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
