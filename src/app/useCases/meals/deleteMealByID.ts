import { Request, Response } from 'express';
import { Meal } from '../../models/Meal';

export async function deleteMealById(req: Request, res: Response){
	try {
		const { mealId } = req.params;

		//Verifica se o mealId é menor que 24 caracteres
		if(mealId.length < 24) {
			res.status(400).json({ message: 'Invalid ID'});
			return;
		}

		const meal = await Meal.findById(mealId);

		// Verifica se existe um Id de uma refeição já cadastrada igual ao passado na requisição
		if(!meal) {
			res.status(404).json({ message: 'Meal not found' });
			return;
		}

		await Meal.findByIdAndDelete(mealId);
		res.status(200).send();

	} catch (error) {
		console.log(error);
		res.status(500);
	}
}
