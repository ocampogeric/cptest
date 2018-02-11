import express from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'

const router = express.Router()
const saltRounds = 10

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'})
})

router.get('/login', function(req, res) {
  res.render('login', {title: 'LogIn'})
})

router.get('/logout', function(req, res) {
  req.session.isLogin = false
  req.session.userName = ""
  req.session.isAdmin = 0
  req.session.userId = 0
  req.session.save(function(){
    res.redirect('/')
  })
})

router.post('/login', function(req, res) {
	let username = req.body.username
	let password = req.body.password

	User.findOne({username: username},(err, user) => {
		if (user) {
			bcrypt.compare(password, user.password)
			.then((result) => {
	    	if (result) {
	    		req.session.isLogin = true
          req.session.userName = user.name
	    		res.redirect('/')
	    	} else {
	    		res.render('login', {msg: 'invalid User or password!'})
	    	}
			})
		} else {
			res.render('login', {msg: 'invalid User or password!'})
		}
	})
})

module.exports = router
