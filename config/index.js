var configVal = require('./config');

module.exports = {
    getDBConnection: function() {
    return 'mongodb://' + configVal.username + ':' + configVal.password + '@ds127044.mlab.com:27044/moviesite';
    }
}