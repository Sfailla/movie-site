const mongoose = require('mongoose');

// Movie Schema This refers to the info in MongoDB
const movieSchema = mongoose.Schema({
    title:{
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
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Movie = module.exports = mongoose.model('Movie', movieSchema);

// Get Movies
module.exports.getMovies = (callback, limit) => {
  Movie.find(callback).limit(limit);
}

// Get Movie
module.exports.getMovieById = (id, callback) => {
  Movie.findById(id, callback);
}

// Adding a movie
module.exports.addMovie = (movie, callback) => {
  Movie.create(movie, callback)
}

// Updating a movie
module.exports.updateMovie = (id, movie, options, callback) => {
  const query = { _id: id }
  const update = {
    title: movie.title,
    genre: movie.genre,
    discription: movie.description,
    director: movie.director,
    starring: movie.starring,
    img_url: movie.img_url
  }
  Movie.findOneAndUpdate(query, update, options, callback);
}

// Delete a Movie
module.exports.removeMovie = (id, callback) => {
  const query = { _id: id };
  Movie.remove(query, callback);
}
