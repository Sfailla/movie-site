const mongoose = require('mongoose');
var config = require('./config.json');

function connectToMongoose() {
	const getDBConnection = `mongodb://${config.username}:${config.password}@ds127044.mlab.com:27044/moviesite`;
	mongoose.Promise = global.Promise;

	function makeDBConnection() {
		mongoose
			.connect(getDBConnection, {
				useMongoClient: true
			})
			.then(() => console.log('Mlab is connected...'))
			.catch(err => console.error(err));
	}
	return makeDBConnection();
}

module.exports = {
	connectToMongoose
};
