const jwt = require('jsonwebtoken')
, bcrypt = require('bcryptjs')
, config = require('./../config')

module.exports = {
  signup: (req, res) => {
    console.log('here')
    let db = req.app.get('db')
    , { email, password, name } = req.body
    console.log(req.body)
    db.auth.check_email([email]).then(emailFound => {
      if(!emailFound.length){
        console.log('email not found')
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              db.auth.create_user([email, hash, name]).then(userCreated => {
                console.log('createdUser')
                const token = jwt.sign({id: userCreated[0].id.toString()}, config.token_secret).toString();
                res.header('x-auth', token).json({user:userCreated[0]})
              }).catch(err => res.status(500).json(err))
          })
        })
      } else {
        res.status(200).json('emailFound')
        console.log('email found')
      }
    })
  },
  login: (req, res ) => {
    const db = req.app.get('db')
    , {email, password} = req.body
    console.log(req.body)
    db.auth.login([email]).then(loginRes => {
      console.log(loginRes[0])
      bcrypt.compare(password, loginRes[0].password, (err, result) => {
        if(err){res.status(500).json(err)}
         else {
           if(result){
             const token = jwt.sign({id: loginRes[0].id}, config.token_secret).toString();
             res.header('x-auth', token).status(200).json(loginRes[1])
           } else {
             res.status(500).json(err)
           }
         }
      })
    }).catch(err => {
      res.status(500).json(err)
    })
  }
}
