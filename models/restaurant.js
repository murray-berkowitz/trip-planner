var db = require('./db');
var Sequelize = db.Sequelize;

const Restaurant = db.define('restaurant', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true
	},
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
})

module.exports = Restaurant;