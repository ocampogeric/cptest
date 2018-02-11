import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../../models/User'
import config from '../../config/config'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/', (req, res) => {
  let { username, password} = req.body

  User.findOne({username: username},(err, user) => {
    if (user) {
      bcrypt.compare(password, user.password)
      .then((result) => {
        if (result) {
          let token = jwt.sign({userId: user.id}, config.secret, {
            algorithm: 'HS256',
            expiresIn: '60m' // expires in 30 min
          })
          res.status(200).json({success: true,
            data: {token: token, name: user.name, userId: user.id}})
        } else {
          res.status(404).json({success: false, data: { msg: 'Bad credentials! :('}})    
        }
      })
    } else {
      res.status(404).json({success: false, data: { msg: 'Bad credentials! :('}})
    }
  })
})

export {router as default}