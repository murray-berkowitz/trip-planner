const db = require('./db');
const Sequelize = db.Sequelize;
const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');

const sync = function(){
	return db.sync({force:true})
}


Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
	sync,
}
