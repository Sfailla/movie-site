const mongoose = require('mongoose');
var config = require('./config.json');

function connectToMongoose() {
	mongoose.Promise = global.Promise;

	function makeDBConnection() {
		mongoose
			.connect(process.env.MONGOOSE_URI, {
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
