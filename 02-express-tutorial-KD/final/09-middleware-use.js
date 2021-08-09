// write = ?user=kavan to access pages
// 3 types of middleware : own / express / third party
// made our own middleware here
const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
//  req => middleware => res
app.use([authorize, logger]);
// ^^ we dont have to write logger and authorize explicitly every time in the app.get
// will execute on order they are defined

// app.use('/api',logger)
// will apply to all the subpath which have '/api' in them not in '/' or '/about'

// api/home/about/products
app.get('/', (req, res) => {
	// write 'http://localhost:5000/?user=kavan' to access page
	res.send('Home page');
});
app.get('/about', (req, res) => {
	res.send('About page');
});

app.get('/api/products', (req, res) => {
	res.send('Products page');
});
app.get('/api/items', (req, res) => {
	// app.get('/api/items',[authorize,logger] ,(req, res) => {
	//you can also specify authorize and logger for specific url only
	console.log(req.user);
	res.send('Items page');
});

app.get('*', function (req, res) {
	res.send('what???', 404);
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
