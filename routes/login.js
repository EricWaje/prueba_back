const { Router } = require('express');
const router = Router();

const { compare } = require('../controllers/login');

router.post('/', compare);

module.exports = router;
