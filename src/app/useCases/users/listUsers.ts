import { Request, Response } from 'express';

import { User } from '../../models/User';

export async function listUsers(req: Request, res: Response) {
	const users =  await User.find();

	res.sendStatus(200).json(users);
}
