const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;

// Get genres
module.exports = {
	getGenres(callback, limit) {
		Genre.find(callback).limit(limit);
	},

	// Adding a Genre
	addGenre(genre, callback) {
		Genre.create(genre, callback);
	},

	// Updating a Genre
	updateGenre(id, genre, options, callback) {
		const query = { _id: id };
		const update = {
			name: genre.name
		};
		Genre.findOneAndUpdate(query, update, options, callback);
	},

	// Delete a Genre
	removeGenre(id, callback) {
		const query = { _id: id };
		Genre.remove(query, callback);
	}
};
