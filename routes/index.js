var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Place = require('../models/place');
router.get('/', function(req,res,next){
	Promise.all([
		Hotel.findAll(),
		Restaurant.findAll(),
		Activity.findAll()
	])
	.then(function(results){
		res.render('index', {hotels:results[0],restaurants:results[1],activities:results[2]});
	})
})

module.exports = router;