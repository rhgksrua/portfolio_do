// Porfolio


var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.NODE_ENV === 'production' ? '45.55.42.72' : '127.0.0.1';

app.get('/', function(req, res) {
    res.send('hello world');
});
app.listen(port, function() {
    console.log('http://' + ip + ':' + port);
});
