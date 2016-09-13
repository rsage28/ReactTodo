var express = require('express');

// Create app
var app = express();
const PORT = process.env.PORT;

if(PORT === undefined) {
    app.use(express.static('public'));

    app.listen(3000, function() {
        console.log('Express server on port ' + PORT);
    });
}
else {
    app.use(function(req, res, next) {
        if(req.headers['x-forwarded-proto'] === 'http') {
            next();
        }
        else {
            res.redirect('http://' + req.hostname + req.url);
        }
    });

    app.use(express.static('public'));

    app.listen(PORT, function() {
        console.log('Express server on port ' + PORT);
    });
}