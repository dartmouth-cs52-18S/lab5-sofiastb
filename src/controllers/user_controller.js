import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send('You must provide email and password');
  }

  User.findOne({ email })
    .then((data) => {
      if (data == null) {
        const user = new User();
        user.email = email;
        user.password = password;
        console.log(password);
        user.save()
          .then((response) => {
            res.send({ token: tokenForUser(user) });
          })
          .catch((err) => {
            if (err) {
              res.sendStatus(500);
            }
          });
      } else {
        res.sendStatus(500);
      }
    })
    .catch((err) => {
      res.status(422).send('User already exists');
    });

  return next;
};
