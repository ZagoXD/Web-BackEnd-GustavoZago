require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/generate-token", (req, res) => {
    const messages = [
        "Olá, mundo!",
        "Bem-vindo à API!",
        "Hoje é um ótimo dia!",
        "Node.js é incrível!",
        "JWT é poderoso!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const token = jwt.sign({ message: randomMessage }, process.env.JWT_SECRET, {
        expiresIn: "1h" 
    });

    res.json({ token });
});

app.post("/decode-token", (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Token não fornecido" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ message: decoded.message });
    } catch (err) {
        res.status(401).json({ error: "Token inválido ou expirado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
