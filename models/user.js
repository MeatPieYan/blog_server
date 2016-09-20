const mongoose = require('mongoose');

const BaseModel = require('./base_model');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String },
	loginname: { type: String },
	// password: { type: String },
	// email: { type: String },
	// imgurl: { type: String },
	// location: { type: String},
	// website: { type: String },
	// weibo: { type: String },
	// wechat: { type: String },
	// signature: { type: String },

	// blog_count: { type: Number, default: 0 },
	// create_at: { type: Date, default: Date.now },
	// update_at: { type: Date, default: Date.now },

});

// UserSchema.plugin(BaseModel);

mongoose.model('User',UserSchema);