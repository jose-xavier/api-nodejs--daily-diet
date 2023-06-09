import { Request, Response } from 'express';
import { Meal } from '../../models/Meal';

export async function listSumaryMeals(req: Request, res: Response) {
	try {
		const { userId } = req.params;

		const meals = await Meal.find().where('user').equals(userId);

		// Quantidade total de refeições registradas
		const totalMeals = meals.length;

		// Quantidade total de refeições dentro da dieta
		const dietMeals = meals.filter((meal) => meal.isDiet).length;

		// Quantidade total de refeições fora da dieta
		const nonDietMeals = meals.filter((meal) => !meal.isDiet).length;


		// Melhor sequência por dia de refeições dentro da dieta
		const dietMealsByday: { [key: string]: number } = {};

		meals.forEach((meal) => {
			const date = meal.createdAt.toDateString();

			if(meal.isDiet) {
				dietMealsByday[date] = (dietMealsByday[date] || 0) + 1;
			}
		});


		// Retornar as métricas como resposta
		res.status(200).json({
			totalMeals,
			dietMeals,
			nonDietMeals,
			dietMealsByday
		});

	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
