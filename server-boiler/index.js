const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, config = require('./config')
, authCtrl = require('./controllers/auth')
, userCtrl = require('./controllers/user')
, app = module.exports = express();

app.use(bodyParser.json());
// app.use(userCtrl.decodeToken)
app.post('/api/signup', authCtrl.signup)
app.post('/api/login', authCtrl.login)
app.get('/api/getUser', userCtrl.getUser)

const massiveServer = massive(config.MASSIVE_URI)
.then( db => {
  app.set('db', db);
  db.init.init();
  app.listen( config.port, console.log(config.port));
})
