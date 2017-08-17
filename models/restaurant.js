const db = require('./db');
const Sequelize = db.Sequelize;

const Restaurant = db.define('restaurant', {
	name: {
		type:Sequelize.STRING,
		allowNull:false
	},
	price: {
		type:Sequelize.INTEGER,
		validate: {
			min:1,
			max:5
		}
	}
});

module.exports = Restaurant;