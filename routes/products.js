const { Router } = require('express');
const router = Router();
//const userExtractor = require('../middlewares/userExtractor');

const {
    all,
    single,
    update,
    deleteProd,
    create,
} = require('../controllers/products');

router.get('/', all);
router.get('/:id', single);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteProd);

module.exports = router;
