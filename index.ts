import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 3000;
const app = express();

app.use('/hello', (req, res, next) => {
    console.log('method use() instead all()');
    next();
});

app.get('/hello', (req, res) => {
    // res.send('Hello!');
    throw new Error('something went wrong...');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`The server started at: http://localhost:${port}`);
});