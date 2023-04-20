import express from "express";

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log('userRouter middleware');
    next();
});

userRouter.post('/login', (req, res) => {
    res.send('login');
});

userRouter.post('/register', (req, res) => {
    res.send('register');
});

export { userRouter }; 