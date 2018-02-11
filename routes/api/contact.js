import express from 'express'
import Contact from '../../models/Contact'

const router = express.Router()

router.get('/', (req,res) => {
  Contact.find({}, (err, contacts) => {
    if (err)
      res.status(400).json({success: false, data: {msg: 'something was wrong, try later! :(', contacts: []}})
    res.status(200).json({success: true, data: {contacts: contacts}})
  })
})

router.get('/:id', (req,res) => {
  Contact.findOne({_id: req.params.id}, (err, contact) => {
    if (err)
      res.status(400).json({success: false, data: {msg: 'something was wrong, try later! :(', contact: []}})
    res.status(200).json({success: true, data: {contact: contact}})
  })
})

router.post('/', (req, res) => {
  let contact = new Contact(req.body)
  contact.save((err) => {
    if (err) {
      res.status(400).json({success: false, data: { msg: 'Error on create contact :(', error: err.errors}})
    } else {
      res.status(200).json({sucess: true, data: {contact: contact}})  
    }
    
  })
})

router.put('/:id', (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.id}, req.body, (err, contact) => {
    if (err) {
      res.status(400).json({success: false, data: { msg: 'Error on update contact :(', error: err.errors}})
    } else {
      Contact.findOne({_id: contact.id}, (err, contact2) => {
        res.status(200).json({sucess: true, data: {contact: contact2}})
      })
    }
  })

})

router.delete('/:id', (req, res) => {
  Contact.findOneAndRemove({ _id: req.params.id},(err) => {
    if (err) {
      res.status(400).json({success: false, data: { msg: 'Error on delete contact :(', error: err.errors}})
    } else {
      res.status(200).json({sucess: true, data: {msg: 'Successfully deleted!'}})
    }
  })

})

export {router as default}