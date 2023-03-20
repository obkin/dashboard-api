import express from 'express';

const port = 13000;
const app = express();

app.all('/home', (req, res, next) => {
    console.log('method all');
    next();
});

const cb = (req, res, next) => {
    console.log('Callback #2');
    next();
};

app.get('/home', cb, (req, res) => {
    res.send('Hello, main callback!')
    console.log('Callback #1')
});

app.route('/user')
    .get('/home', (req, res) => {
        res.send('Home page.');
    })
    .post('/home', (req, res) => {
        res.send('Post method for home page');
    });

app.listen(port, () => {
    console.log(`The server started at http://localhost:${port}`);
});