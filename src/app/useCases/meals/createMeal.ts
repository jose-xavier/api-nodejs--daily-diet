import { Request, Response } from 'express';

import { Meal } from '../../models/Meal';

export async function createMeal(req: Request, res: Response) {
	try {
		const { name, description, isDiet, user, createdAt } = req.body;

		const meal = await Meal.create({
			name,
			description,
			isDiet,
			createdAt,
			user
		});

		res.status(201).json(meal);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}

}
