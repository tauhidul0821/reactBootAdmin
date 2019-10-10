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
      res.status(200).json({ success: 'test router ok' });
    } catch (err) {
      next(err);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const students = await Students.find().sort({ created_at: -1 });
      res.status(200).json(students);
    } catch (err) {
      next(err);
    }
  },
  insert: async (req, res, next) => {
    try {
      //res.status(200).json({ success: 'insert router ok' });
      const newStudents = new Students({
        _id: ObjectId(),
        name: req.body.name,
        age: req.body.age,
        cgpa: req.body.cgpa
      });

      const newStudentsRes = await newStudents.save();
      res.status(200).json(newStudentsRes);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      res.status(200).json({ success: 'update router ok' });
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      res.status(200).json({ success: 'delete router ok' });
    } catch (err) {
      next(err);
    }
  },
  setSession: async (req, res, next) => {
    try {
      req.session.favColor = 'Red';
      //res.send('setting favourite color ... !');
      // Set expires
      const hour = 5000;
      req.session.cookie.expires = new Date(Date.now() + hour);
      const limitedTime = (req.session.cookie.maxAge = hour);

      if (req.session.views) {
        req.session.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + req.session.views + ' Time</p>');
        res.write('<p>expires in: ' + limitedTime / 1000 + 's</p>');
        res.end();
      } else {
        req.session.views = 1;
        res.end('welcome to the session demo. refresh!');
      }
    } catch (err) {
      next(err);
    }
  },
  getSession: async (req, res, next) => {
    try {
      res.send(
        'Your favourite color ... !' +
          (req.session.favColor == undefined
            ? 'NOT FOUND'
            : req.session.favColor)
      );
    } catch (err) {
      next(err);
    }
  },
  setSessionmidile: async (req, res, next) => {
    try {
      res.setHeader('Content-Type', 'text/html');
      res.write('<p>views: ' + req.session.views + ' Time</p>');
      res.write('<p>expires in:  second</p>');
      res.end();
    } catch (err) {
      next(err);
    }
  },
  getSessionmidile: async (req, res, next) => {
    try {
      res.send(
        'Your favourite color ... !' +
          (req.session.favColor == undefined
            ? 'NOT FOUND'
            : req.session.favColor)
      );
    } catch (err) {
      next(err);
    }
  },
  photoUpMethod: async (req, res, next) => {
    try {
      console.log(' i am servaer');
      res.send('this is photo upload method');
    } catch (err) {
      next(err);
    }
  }
};
