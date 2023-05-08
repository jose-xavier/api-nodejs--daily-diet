import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
	return res.send({message: 'Hello world'});
});

app.listen(3333, () => {
	console.log(`🚀 server is running on localhost:${port}`);
});
