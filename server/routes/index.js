const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const dialogRouter = require('./dialogRouter');
const messageRouter = require('./messageRouter');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/dialog', dialogRouter);
router.use('/message', messageRouter);


module.exports = router;