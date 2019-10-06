const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
const ObjectId = require('mongodb').ObjectID;
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// Load Mongo Model
const User = require('../models/Users');
const Students = require('../models/Students');


module.exports = {
  test: async (req, res, next) => {
    try {
      res.status(200).json({ success: 'router ok' });
    } catch (err) {
      next(err);
    }
  },
  register: async (req, res, next) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      errors.email = 'email already exists';
      return res.status(400).json(errors);
    }
    const avatar = gravatar.url(req.body.email, {
      s: '200', // Size
      r: 'pg', // Rating
      d: 'mm' // Default
    });

    const newUser = new User({
      _id: ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    const user2 = await newUser.save();
    res.status(201).json(user2);
  },
  login: async (req, res, next) => {
    try {
      const { errors, isValid } = validateLoginInput(req.body);
      //Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const email = req.body.email;
      const password = req.body.password;
      //Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const payload = {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar
        };
        //console.log(payload);
        const token = await jwt.sign(payload, keys.secret.key, {
          expiresIn: 36000,
          issuer: 'cccg',
          algorithm: 'HS256'
        });
        res.json({ success: true, token: 'Bearer ' + token });
      } else {
        errors.password = 'password incorrect';
        return res.status(400).json(errors);
      }
    } catch (err) {
      next(err);
    }
  },
  current: async (req, res, next) => {
    try {
      res.json({
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar
      });
      //res.status(200).json({ success: 'current router ok' });
    } catch (err) {
      next(err);
    }
  },
  delecteCurrentUser: async (req, res, next) => {
    try {
      res.status(200).json({ success: 'delecteCurrentUser router ok' });
    } catch (err) {
      next(err);
    }
  }
};
