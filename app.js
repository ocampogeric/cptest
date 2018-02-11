import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import db from './db'
import session from 'express-session'
import FileStoreImport from 'session-file-store'
import config from './config/config'
import index from './routes/index'
import contacts from './routes/contacts'
import api from './routes/api'

var FileStore = FileStoreImport(session)

mongoose.connect(db.dbUrl, { useMongoClient: true }, (err, db) => {
	if (err){
		console.log(err)
  } else {
    console.log('connected! :)')  
  }
	
});



var app = express();

app.use(session({
  name: 'server-session-cookie-id',
  secret: config.secret,
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req,res,next) => {
    res.locals.session = req.session;
    next()
});
app.use('/api', api)
app.use('/', index)
app.use('/contacts', contacts)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

module.exports = app 
