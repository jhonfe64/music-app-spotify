const express = require('express');
const config = require('./server/config');

const app = config(express());

app.listen(app.get('port'), function(){
    console.log('server on port ', app.get('port'));
})

