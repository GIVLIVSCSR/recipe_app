const mongoose = reqiure('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	
	ingredients: {
		type: String,
		required: true,
		trim: true
	},

	ingredients_desc: {
		type: String,
		reqiured: true,
		trim: true
	},

	cook: {
		type: String,
		reqiured: true,
		trim: true
	},

	image: {
		type: String,
		reqiured: true,
		trim: true
	},

	category: {
		type: String,
		reqiured: true,
		trim: true
	},

	author: {
		type: Schema.Types.ObjectId, ref: 'User'
	}

});

module.exports = mongoose.model('Item', ItemSchema);