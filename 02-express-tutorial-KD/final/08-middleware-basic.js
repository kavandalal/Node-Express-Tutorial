// 3 types of middleware : own / express / third party
//made our own middleware here
const express = require('express');
const app = express();

//  req => middleware => res

const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date();
	console.log(method, url, time);
	next();
	//if the abive next() is not written the website will never stop and just buffer continuously, as the middleware is between the req and res it has to be xplicitly passed to the next object
};

app.get('/', logger, (req, res) => {
	res.send('Home');
});
app.get('/about', logger, (req, res) => {
	res.send('About');
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
