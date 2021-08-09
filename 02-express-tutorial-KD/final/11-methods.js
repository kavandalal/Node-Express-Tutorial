const express = require('express');
const app = express();
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));
//will go in './methods-public' and try to find the html page with name of index.html and render that in the browser

// parse form data
app.use(express.urlencoded({ extended: false }));
// by default the extended is true
// urlencoded will take the data that the user will input and stote it as a key valur pain in encoded form
// you can check by doing this program without the ablve line

// parse json
app.use(express.json());

// you can see in ./methods-public/javascript.html in that script part the axios .get and .post methods will call the server that is this file and in both the files the url is same for get (i.e. app.get and axios.get , app.post and axios.post) it means that the frontend will talk with the backend to get the data
app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'please provide name value' });
	}
	res.status(201).json({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'please provide name value' });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		console.log(req.body);
		return res.status(200).send(`Welcome ${name}`);
	}

	res.status(401).send('Please Provide Credentials');
});

app.put('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `no person with id ${id}` });
	}
	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `no person with id ${req.params.id}` });
	}
	const newPeople = people.filter(
		(person) => person.id !== Number(req.params.id)
	);
	return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
