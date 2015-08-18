var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		routes = require('./path.js');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  	res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
//   res.render('pages/index');
// });

// app.get('/api', function(req, res) {
// 	res.jsonp({success: "hello"});
// });

app.get('/', routes.home);
app.get('/api', routes.getListings);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


