import { Schema , model } from 'mongoose';
import { mealSchema } from './Meal';

export const User = model('User', new Schema({
	name: {
		type: String,
		required: true,
	},
	meals: [mealSchema]

}));
