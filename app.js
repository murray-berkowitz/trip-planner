var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var models = require('./models');
var routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

models.sync()
	.then(function(){
		require('./seed.js');
	})
	.then(function(){
	 	app.listen(port, function(){
	 		console.log(`listening on port ${port}`);
	 	});
	 })
	.catch(console.error);

app.use(function(err,req,res,next){
	res.render('error', {err});
})
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/feather-icons', express.static(path.join(__dirname, 'node_modules/feather-icons/dist')));

app.use(require('method-override')('_method'));
app.use(urlEncodedParser);
app.use(require('morgan')('dev'));
app.use('/', routes);
app.use(express.static('public'));
