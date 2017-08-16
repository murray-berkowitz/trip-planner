var Sequelize = require('sequelize');
var db = require('./db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);



module.exports = {
	Hotel:Hotel,
	Restuarant:Restaurant,
	Place:Place,
	Activity:Activity
}
