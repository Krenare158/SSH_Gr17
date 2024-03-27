const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());

app.post('/api/greet', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}!`);
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

