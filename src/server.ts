import express from 'express';
import { router } from './router';
import mongoose  from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const port = 3333;

		app.use(express.json());

		app.use(router);

		app.listen(3333, () => {
			console.log(`🚀 server is running on localhost:${port}`);
		});
	})
	.catch(() => {
		console.log('Erro ao conectar ao mongodb');
	});
