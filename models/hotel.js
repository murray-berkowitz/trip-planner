var db = require('./db');
var Sequelize = db.Sequelize;

const Hotel = db.define('hotel', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull:false
	},
	num_stars: {
		type:Sequelize.FLOAT,
		validate: {
			min:1,
			max:5
		}
	},
	amenities: {
		type: Sequelize.STRING,
	}
})

module.exports = Hotel;