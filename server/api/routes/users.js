const router = require('express-promise-router')();
const UsersController = require('../controllers/UsersController');
const passport = require('passport');
const passportConf = require('../../config/passport');
const passportJWT = passport.authenticate('jwt', { session: false });
router
  .route('/register')
  .get(UsersController.test)
  .post(UsersController.register);

router
  .route('/login')
  .get(UsersController.test)
  .post(UsersController.login);

router
  .route('/current')
  .get(passportJWT, UsersController.current)
  .post(UsersController.test);

router
  .route('/delete')
  .get(UsersController.delecteCurrentUser)
  .post(UsersController.test);

module.exports = router;
