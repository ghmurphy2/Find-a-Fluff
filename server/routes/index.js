const router = require('express').Router();
const albumRoutes = require('./albumRoutes');
const imageRoutes = require('./imageRoutes');
const userRoutes = require('./userRoutes');
const subjectRoutes = require('./subjectRoutes');

router.use('/api/albums', albumRoutes)
router.use('/api/images', imageRoutes)
router.use('/api/users', userRoutes)
router.use('/api/subjects', subjectRoutes)

module.exports = router