const mongoose = require('mongoose');

// Movie Schema This refers to the info in MongoDB
const movieSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	genre: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	director: {
		type: String
	},
	starring: {
		type: String
	},
	img_url: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

// Get Movies
module.exports = {
	getMovies(callback, limit) {
		Movie.find(callback).limit(limit);
	},
	getMovieById(id, callback) {
		Movie.findById(id, callback);
	},
	addMovie(movie, callback) {
		Movie.create(movie, callback);
	},
	updateMovie(id, movie, options, callback) {
		const query = { _id: id };
		const update = {
			title: movie.title,
			genre: movie.genre,
			discription: movie.description,
			director: movie.director,
			starring: movie.starring,
			img_url: movie.img_url
		};
		Movie.findOneAndUpdate(query, update, options, callback);
	},
	removeMovie(id, callback) {
		const query = { _id: id };
		Movie.remove(query, callback);
	}
};
