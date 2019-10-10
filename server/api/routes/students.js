const router = require('express-promise-router')();
const UsersController = require('../controllers/UsersController');
const StudentsController = require('../controllers/StudentsController');
const passport = require('passport');
const passportConf = require('../../config/passport');
const passportJWT = passport.authenticate('jwt', { session: false });
// Load Model
const Students = require('../models/Students');
const SessionsController = require('../../config/SessionsController');
router
  .route('/all')
  .get(StudentsController.getAll)
  .post(StudentsController.test);

router
  .route('/add')
  .get(StudentsController.test)
  .post(StudentsController.insert);

router
  .route('/edit')
  .get(StudentsController.update)
  .post(StudentsController.test);

router
  .route('/delete')
  .get(StudentsController.delete)
  .post(StudentsController.test);
router
  .route('/setSession')
  .get(StudentsController.setSession)
  .post(StudentsController.test);

router
  .route('/getSession')
  .get(StudentsController.getSession)
  .post(StudentsController.test);

router
  .route('/setSessionmidile')
  .get(SessionsController.setSession, StudentsController.setSessionmidile)
  .post(StudentsController.test);

router
  .route('/getSessionmidile')
  .get(SessionsController.getSession)
  .post(StudentsController.test);

// api/students/photoup
router
  .route('/photoup')
  .get(StudentsController.photoUpMethod)
  .post(StudentsController.photoUpMethod);

module.exports = router;
