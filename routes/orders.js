const { Router } = require('express');
const router = Router();

const { postOrder, all, single } = require('../controllers/orders');

router.get('/', all);
router.get('/:id', single);
router.post('/', postOrder);

module.exports = router;
