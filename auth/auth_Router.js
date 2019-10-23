const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users_model");
const secrets = require("../config/secrets");

// for endpoints beginning with /api/auth
//GET's all users
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      // console.log(error.message)
      res.status(200).json({ message: "cannot add the user", error });
    });
});

//Registers new users
router.post("/register", (req, res) => {
  // console.log(req);
  let user = req.body;
  // console.log(req.body)
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      // console.log(error.message)
      res.status(500).json({ message: "cannot add the user", error });
    });
});

//User login
router.post("/login", (req, res) => {
  let { username, password } = req.body;
  // console.log(req.body);

  Users.findBy({ username })
    .first()
    .then(user => {
      //console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          id: user.id,
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: "cannot login the user", error });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "12h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
