import mongoose from 'mongoose'
const Schema = mongoose.Schema

let contactSchema =  new Schema({
	name: {type: String, required: true, max: 100},
	lastName: {type: String, required: true, max: 100},
	phone: {type: String, required: true, max: 10},
	address: {type: String, required: true, max: 250},
	github: {type: String, max: 100},
	facebook: {type: String, max: 100},
	twitter: {type: String, max: 100},
})

let Contact = mongoose.model('Contact', contactSchema)

export {Contact as default}