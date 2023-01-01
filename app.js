const express = require('express');

const app = express();
const port = 2002;

app.get('/users', (req, res) => {
    res.send("유저")
});

app.post('/login', (req, res) => {
    res.send("로그인 페이지")
});

app.post('/logout', (req, res) => {
    res.send("로그아웃 페이지")
});

app.post('/register', (req, res) => {
    res.send("레지스터")
});

app.listen(port, () => {
    console.log(port, "서버열림");
});
