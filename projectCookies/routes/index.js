const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { user: req.session.user, cookie: req.cookies.random });
});

router.post('/salvauser', (req, res) => {
  req.session.user = req.body.nome;
  res.redirect('/');
});

router.get('/random', (req, res) => {
  if (!req.cookies.random) {
    const randomNumber = Math.floor(Math.random() * 100);
    res.cookie('random', randomNumber, { maxAge: 900000 });
    res.render('random', { random: randomNumber });
  } else {
    res.render('random', { random: req.cookies.random });
  }
});

let globalCount = 0;
router.get('/contador', (req, res) => {
  globalCount++;
  req.session.userCount = (req.session.userCount || 0) + 1;
  res.render('index', {
    globalCount,
    userCount: req.session.userCount,
    user: req.session.user,
  });
});

module.exports = router;
