var db = require('./db');
var Sequelize = db.Sequelize;
const Activity = db.define('activity', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true
	},
	name: {
		type:Sequelize.STRING,
		allowNull:false
	},
	age_range: {
		type:Sequelize.STRING,
		allowNull:false
	}
})

module.exports = Activity;