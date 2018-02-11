import mongoose from 'mongoose'
const Schema = mongoose.Schema

let userSchema =  new Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true }
})

let User = mongoose.model('User', userSchema)

export {User as default}