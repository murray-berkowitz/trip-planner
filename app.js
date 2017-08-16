var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var models = require('./models/db');
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Hotel = models.Hotel;
var routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

models.sync()
	.then(function(){
	 	app.listen(port, function(){
	 		console.log(`listening on port ${port}`);
	 	});
	 })
	.catch(console.error);

app.use(function(err,req,res,next){
	res.render('error', {err});
})
app.use(require('method-override')('_method'));
app.use(urlEncodedParser);
app.use(require('morgan')('dev'));
app.use('/', routes);
app.use(express.static('public'));
