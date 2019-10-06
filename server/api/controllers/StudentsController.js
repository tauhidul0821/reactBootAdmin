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
  }
};
