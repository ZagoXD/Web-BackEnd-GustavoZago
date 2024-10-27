const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));

// 1. Rotas com hiperligação para a outra
app.get('/', (req, res) => {
    res.render('home', { link: '/page2' });
});

app.get('/page2', (req, res) => {
    res.render('page2', { link: '/' });
});

// 2. Rota que recebe um texto por query e exibe invertido
app.get('/inverter', (req, res) => {
    const texto = req.query.texto || '';
    const textoInvertido = texto.split('').reverse().join('');
    res.render('inverter', { textoInvertido });
});

// 3. Rota que recebe usuário e senha por POST e valida
app.get('/login', (req, res) => {
    res.render('login'); 
});

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    const acessoPermitido = senha === usuario + usuario;
    res.render('login', { usuario, acessoPermitido });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
