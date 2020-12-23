const { Router } = require('express');

const emailRouter = Router();

emailRouter.get('/activate', (req, res, next) => {
    console.log(req.query);
});

module.exports = emailRouter;
