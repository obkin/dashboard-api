import express from 'express';

const port = 3000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello from express!');
});

app.listen(port, () => {
    console.log(`The server was run at http://localhost:${port}`);
});