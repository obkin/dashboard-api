import express from 'express';

const port = 3000;
const app = express();

app.get('/hello', (req, res) => {
    res.cookie('name', 'value', {
        domain: '',
        path: '../',
        secure: true,
        expires: 600000
    });
    res.clearCookie('name', { path: '../' });
    res.send('Hello!');
});

app.listen(port, () => {
    console.log(`The server started at: http://localhost:${port}`);
});