// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const Users = require('../users/users_model');
// const secrets = require('../config/secrets');
// // const generateToken = require('./auth_middleware')

// // for endpoints beginning with /api/auth
// router.post('/register', (req, res) => {
//   const user = req.body;
//   //  console.log(req.body)
//   const hash = bcrypt.hashSync(user.password, 10);
//   user.password = hash;

//   Users.add(user)
//   .then(saved => {
//     // console.log(user)
//     res.status(201).json(saved);
//   })
//   .catch((error) => {
//     res.status(500).json({ message: 'Sorry, cannot add user', error });
//   })
// })

// router.post('/login', (req, res) => {
//   const { username, password } = req.headers;

//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {

//         const token = generateToken(user);
        
//         res.status(200).json({
//           message: `Welcome ${user.username}!`,
//           token,
//         });
//       } else {
//         res.status(401).json({ message: 'Invalid Login credentials' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// function generateToken(user) {
//   const payload = {
//     subject: user.id,
//     username: user.username,
//   };

//   const options = {
//     expiresIn: '12h',
//   }
//   return jwt.sign(payload, secrets.jwtSecret, options)
// }



// module.exports = router;

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users_model');
// const secrets = require('../config/secrets')

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ message: 'cannot add the user', error });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.headers;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //produce token
        const token = generateToken(user);//user passes all info about the user
        
        //add token to response which is added token
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,//sub property
    username: user.username,
    
  };

   const secret = 'is it secret? is it safe?';

  const options = {
    expiresIn: '1h',
  }
  return jwt.sign(payload, secret, /*secrets.jwtSecret, */options)//.sign is the signature
}

module.exports = router;

