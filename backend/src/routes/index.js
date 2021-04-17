const express = require('express');
const router = express.Router();
const search = require('../controllers/search')


module.exports  = (app) => {
    router.get('/home/:keyword/:token',  search.search)
    app.use(router);
}