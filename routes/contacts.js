import express from 'express'
import Contact  from '../models/Contact'

const router = express.Router()

function checkAuth(req, res, next) {
  if (!req.session.isLogin) {
    res.redirect('/login');
  } else {
    next();
  }
}

/* GET contact listing. */
router.get('/',checkAuth, (req, res, next) => {
	Contact.find({}, (err, contacts) => {
		res.render('contacts/index', {contacts: contacts})
	})
})

/* GET new contact page. */
router.get('/new',checkAuth, (req, res, next) => {
	res.render('contacts/new')
})

/* GET edit page*/
router.get('/edit/:id', checkAuth, (req, res, next) => {
  Contact.findOne({_id: req.params.id}, (err, contact) => {
    if (contact)
      res.render('contacts/edit', { contact: contact })
    else
      res.render('404')
  })
})

/* POST create new contact*/
router.post('/create', checkAuth, (req, res, next) => {
	let contact = new Contact({
		name: req.body.name,
		lastName: req.body.lastname,
		phone: req.body.phone,
		address: req.body.address,
		facebook: req.body.facebook,
		twitter: req.body.twitter,
		github: req.body.github
	})

	contact.save((err) => {
		if (err) {
			res.render('contacts/new', {msg: err})
		}
		res.redirect('/contacts')
	})
})
/* POST update contact*/
router.post('/update', checkAuth, (req, res, next) => {
  Contact.findOne({_id: String(req.body.id)}, (err, contact) => {
    if (contact) {
      contact.name = req.body.name
      contact.lastName = req.body.lastname
      contact.phone = req.body.phone
      contact.address = req.body.address
      contact.facebook = req.body.facebook
      contact.twitter = req.body.twitter
      contact.github = req.body.github

      contact.save((err) => {
        if (err)
          res.render('contacts/edit', { contact: contact, msg: 'Error on update contact'})
        res.redirect('/contacts')  
      })
      
    } else {
      res.render('404')
    }
  })
})

/* POST remove contact*/
router.post('/delete', checkAuth,(req, res, next) => {
  Contact.findOne({_id: String(req.body.id)}, (err, contact) => {
    if (contact) {
      contact.remove((err) => {
        if (err)
          res.render('contacts/index', { msg: 'Error on delete contact'})
        res.redirect('/contacts')
      })
    }
  })
})

export {router as default}
