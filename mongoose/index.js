const mongoose = require('mongoose');
const mongodb = 'mongodb://localhost:27017/cats/db';

mongoose.connect(mongodb)

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
	console.log("Mongoose connected	 at ", mongodb)
});

console.log('===========');
exports.mongodb = mongodb;
