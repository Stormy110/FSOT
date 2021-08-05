const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');


const hostname = '127.0.0.1';
const port = process.env.port || 8081;

const es6Renderer = require('express-es6-template-engine');
app.use(express.static('public'))
app.engine('.html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


const server = http.createServer(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/study-topics', (req, res) => {
    res.render('study-topics');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});