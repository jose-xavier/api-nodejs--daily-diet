import { Request, Response } from 'express';

import { Meal } from '../../models/Meal';

export async function listMealsById(req: Request, res: Response) {
	try {
		const { userId } = req.params;

		const meals = await Meal.find().where('user').equals(userId);
		res.status(200).json(meals);

	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
