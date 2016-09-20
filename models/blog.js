const mongoose = require('mongoose');

const BaseModel = require('./base_model');


const Schema = mongoose.Schema;

const BlogSchema = new Schema({
	// id: { type: Schema.Types.ObjectId },
	title: { type: String }, 
	img_url: { type: String, default: "./default.png" },
	article: { type: String },
	author: { type: String },
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now }
});

BlogSchema.plugin(BaseModel);

mongoose.model('Blog',BlogSchema);