import { Schema , model } from 'mongoose';

export const User = model('User', new Schema({
	name: {
		type: String,
		required: true
	},
	meal: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Meal'
	}
}));
