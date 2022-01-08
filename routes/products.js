const { Router } = require('express');
const router = Router();
const userExtractor = require('../middlewares/userExtractor');

const {
    all,
    single,
    update,
    deleteProd,
    create,
} = require('../controllers/products');

router.get('/', all);
router.get('/:id', single);
router.post('/', userExtractor, create);
router.put('/:id', userExtractor, update);
router.delete('/:id', userExtractor, deleteProd);

module.exports = router;
