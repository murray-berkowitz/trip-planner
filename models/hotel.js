const db = require('./db');
const Sequelize = db.Sequelize;

const Hotel = db.define('hotel', {
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
});

module.exports = Hotel;