import { Router } from 'express';

import { listUsers } from './app/useCases/users/listUsers';
import { createUser } from './app/useCases/users/createUser';
import { createMeal } from './app/useCases/meals/createMeal';
import { listMealsById } from './app/useCases/meals/listMealsById';
import { updateMealsById } from './app/useCases/meals/updateMealById';
import { deleteMealById } from './app/useCases/meals/deleteMealByID';
import { listOneMealById } from './app/useCases/meals/listOneMealById';
import { listSumaryMeals } from './app/useCases/meals/listSumaryMeals';

export const router = Router();

// criar usuario
router.get('/users', listUsers);

// listar usuarios
router.post('/users', createUser);

// criar uma refeição
router.post('/meals', createMeal);

// apagar uma refeição
router.delete('/meals/:mealId', deleteMealById);

// atualizar refeições de um usuario
router.patch('/meals/:mealId', updateMealsById);

// listar todas as refeições de um usuario
router.get('/users/:userId/meals', listMealsById);

// listar uma refeição especifica
router.get('/meals/:mealId', listOneMealById);


// listar o resumo das refeições por usuário
router.get('/users/:userId/sumary', listSumaryMeals);


