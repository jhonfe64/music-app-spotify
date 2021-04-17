const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('../routes/index');


module.exports = function(app){
    app.set('port', process.env.PORT || 4000);
    app.use(cors({origin: true}))
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    routes(app);
    return app;
}

