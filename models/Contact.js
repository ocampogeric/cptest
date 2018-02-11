import mongoose from 'mongoose'
const Schema = mongoose.Schema

let contactSchema =  new Schema({
	name: String,
	lastName: String,
	phone: String,
	address: String,
	github: String,
	facebook: String,
	twitter: String
})

let Contact = mongoose.model('Contact', contactSchema)

export {Contact as default}