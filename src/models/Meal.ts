import { Schema, model } from 'mongoose';

export const Meal = model('Meal', new Schema({
	name: {
		type: String,
		required: true,
	},
	descripiton: {
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

}));
