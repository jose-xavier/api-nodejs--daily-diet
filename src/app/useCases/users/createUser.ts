import { Request, Response } from 'express';

import { User } from '../../models/User';

export async function createUser(req: Request, res: Response) {
	try {
		const { name } = req.body;

		const user = await User.create({
			name
		});

		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
