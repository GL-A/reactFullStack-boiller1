const jwt = require('jsonwebtoken')
, bcrypt = require('bcryptjs')
, config = require('./../config');

module.exports = {
  decodeToken: (req, res, next)=>{

  },
  getUser: (req, res)=>{
    let token = req.headers['x-auth']
    , db = req.app.get('db')
    , decoded;
    try {decoded = jwt.verify(token, config.token_secret);}
    catch(e) {return Promise.reject(e);}
    db.user.get_user([decoded["id"]]).then(getUserRes => {
      console.log('getUserRes', getUserRes[0])
      res.status(200).json(getUserRes[0])
    }).catch(err => console.log(err))
  }
};
