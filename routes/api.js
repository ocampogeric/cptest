import express from 'express'
import contact from './api/contact'
import auth from './api/auth'
import jwt from 'jsonwebtoken'
import config from '../../config/config'
const router = express.Router()

router.use('/authenticate', auth)


router.use((req, res, next) => {

  // check header or url parameters or post parameters for token
  let token = req.headers['authorization'] || req.body.token || req.query.token
  // decode token
  if (token) {

    // verify secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
      if(err){
        return res.json({ success: false, reauth: true, msg: 'Failed to authenticate token.' })
      }else{
        req.decoded = decoded;    
        next();
      }
    })

  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    })
  }
})

router.use('/contacts', contact)

router.use('/', function(req, res){
  res.status(200).json({success: true, data: {msg: "Welcome to contacts API"}})
})

export {router as default}






