// call node modules into our app
const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const { connectToMongoose } = require('./config/index');
const apiController = require('./controllers/apiController');

//Initializes express and shows port number
const app = express();
const port = process.env.PORT || 3000;

Genre = require('./models/genre');
Movie = require('./models/movie');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.engine(
	'hbs',
	exphbs({
		extname: 'hbs',
		defaultLayout: 'main',
		partialsDir: path.join(__dirname + '/views/partials'),
		layoutsDir: path.join(__dirname + '/views/layouts')
	})
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname + '/public')));

connectToMongoose();
apiController(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Port is listening on ...
app.listen(port, err => {
	if (err) console.log(err);
	console.log(`'Your server is running on port: ${port}`);
});
