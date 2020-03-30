const router = require('express').Router();

const messaging = require('./messaging');
const users = require('./users');

router.use('/messaging', messaging);
router.use('/users', users);

module.exports = router;
