const express = require('express');

const app = express();

let port = 5000;

app.get('/', (req, res) => {
    res.send('<h1>My Node App</h1>')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});