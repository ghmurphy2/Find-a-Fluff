const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBreed,
  deleteBreed,
  login,
} = require('../controllers/user-controllers');

// import middleware
const { authMiddleware } = require('../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveBreed);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/breeds/:breedId').delete(authMiddleware, deleteBreed);

module.exports = router;