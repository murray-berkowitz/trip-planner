const db = require('./db');
const Sequelize = db.Sequelize;
const Activity = db.define('activity', {
	name: {
		type:Sequelize.STRING,
		allowNull:false
	},
	age_range: {
		type:Sequelize.STRING,
		allowNull:false
	}
});

module.exports = Activity;