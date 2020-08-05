const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
	res.send('<h1>aye</h1>');
})

app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})