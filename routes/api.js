import express from 'express'
import contact from './api/contact'
import auth from './api/auth'

const router = express.Router()

router.use('/authenticate', auth)
router.use('/contacts', contact)
router.use('/', function(req, res){
  res.status(200).json({success: true, data: {msg: "Welcome to contacts API"}});
});

export {router as default}






