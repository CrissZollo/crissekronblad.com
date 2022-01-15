const express = require('express');

const app = express();

let port = 5000;

app.get('/', (req, res) => {
    res.send('<p>Welcome!</p>')
});

app.get('/test', (req, res) => {
    res.send('<p>Test</p>')
});

app.get('/*', (req, res) => {
    res.status(404).send("404, Page not found");
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});