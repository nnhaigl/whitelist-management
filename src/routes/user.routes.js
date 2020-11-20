const express = require('express')
const route = express.Router();

route.get('/:id', async (req, res, next) => {
    res.json({ okay: 1 }).send();
})

module.exports = route;