var express = require('express');

// New express application
var app = express();
app.set('view engine', 'ejs');

// Tell express where to find static assets
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/* Routes */
var routes = require('./routes');
app.get('/', routes.home);
app.get('/event/:episode_num?', routes.event_single);
app.get('/contact',routes.contact);
app.get('/aboutus',routes.aboutus);
app.get('/team',routes.team);
app.get('/gallery',routes.gallery);
app.get('/videos',routes.videos);
app.get('/sponsors',routes.sponsors);
app.get('/ca',routes.ca);
app.get('*', routes.not_found);

// Configure server to run on port 3000
// app.listen('3000', function() {
// 	console.log('Application running on localhost:3000');
// });
app.listen(process.env.PORT || 3000, function() {
	console.log('Application running on localhost:3000');
});
