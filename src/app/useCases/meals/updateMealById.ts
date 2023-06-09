import { Request, Response } from 'express';
import { Meal } from '../../models/Meal';

export async function updateMealsById(req: Request, res: Response) {

	try {
		const { mealId } = req.params;
		const { name, description, isDiet } = req.body;



		// Verifica se o mealId é menor que 24 caracteres
		if(mealId.length < 24) {
			res.status(400).json({ message: 'Invalid ID'});
			return;
		}

		const meal = await Meal.findById(mealId);

		// Verifica se existe um Id de uma refeição já cadastrada igual ao passado na requisição
		if(!meal) {
			res.status(404).json({ message: 'Meal not found'});
			return;
		}

		await Meal.findByIdAndUpdate(mealId, {
			name,
			description,
			isDiet,
		});

		res.sendStatus(200);

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
