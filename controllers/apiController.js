module.exports = app => {
	// This is the route for the main page at localhost:3000
	app.get('/', (req, res) => {
		res.render('home', {
			title: 'Welcome to My Movie Site',
			message:
				'In this site you will be able to view, add, update and delete movies.  To see what movies are currently available press the get movies button!',
			include: true
		});
	});

	// This is the View for Adding a Single Movie
	app.get('/api/add-movie', (req, res) => {
		res.render('add-movie', {
			title: 'Welcome to the Add Movies Page',
			addMoviePage: true
		});
	});

	// This is the route for the Movies page
	app.get('/api/movies', (req, res) => {
		Movie.getMovies((err, movies) => {
			if (err) throw err;
			res.render('movies', {
				title: 'Welcome to the Movies Page',
				moviesPage: true,
				movies
			});
		});
	});

	// route for a Post request to add a movie to the db
	app.post('/api/add-movie', (req, res) => {
		const result = req.body;
		console.log(result);
		Movie.addMovie(result, (err, movie) => {
			if (err) console.error(err);
			res.status(200).render('movies', {
				movies: movie
			});
		});
	});

	// route for a single movie that we will search by using the unique id variable :id
	app.get('/api/movie/:_id', (req, res) => {
		const id = req.params._id;
		Movie.getMovieById(id, (err, movie) => {
			if (err) throw err;
			res.render('single-view', movie);
		});
	});

	// route for a Put request to update a Movie
	app.put('/api/movies/:_id', (req, res) => {
		const id = req.params._id;
		const movie = req.body;
		Movie.updateMovie(id, movie, {}, (err, movie) => {
			if (err) throw err;
			res.redirect('/api/movie/' + id);
		});
	});

	// route for a Delete request to Delete a Movie
	app.delete('/api/movies/:_id', (req, res) => {
		const id = req.params._id;
		Movie.removeMovie(id, (err, movie) => {
			if (err) throw err;
			res.redirect('/api/movies');
		});
	});

	app.get('/api/search-movies', (req, res) => {
		res.render('search-movies', { title: 'Movie Search' });
	});

	// ROUTES FOR GENRES

	app.get('/api/genres', (req, res) => {
		Genre.getGenres((err, genres) => {
			if (err) throw err;
			res.json(genres);
		});
	});

	// route for a Post request to add a genre
	// we can use the same route as long as we are making a different request
	app.post('/api/genres', (req, res) => {
		const genre = req.body;
		Genre.addGenre(genre, (err, genre) => {
			if (err) throw err;
			res.json(genre);
		});
	});

	// route for a Put request to update a genre
	app.put('/api/genres/:_id', (req, res) => {
		const id = req.params._id;
		const genre = req.body;
		Genre.updateGenre(id, genre, {}, (err, genre) => {
			if (err) throw err;
			res.json(genre);
		});
	});

	// route for a Delete request to Delete a Genre
	app.delete('/api/genres/:_id', (req, res) => {
		const id = req.params._id;
		Genre.removeGenre(id, (err, genre) => {
			if (err) throw err;
			res.json(genre);
		});
	});
};
