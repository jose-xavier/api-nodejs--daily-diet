import { Schema, model } from 'mongoose';

export const mealSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	isDiet: {
		type: Boolean,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}

});

export const Meal = model('Meal', mealSchema );
