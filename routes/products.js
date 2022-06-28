const { Router } = require('express');
const router = Router();
//const userExtractor = require('../middlewares/userExtractor');

/* const {
    all,
    allCategory,
    single,
    update,
    deleteProd,
    create,
} = require('../controllers/products'); */
const { all, allCategory, single } = require('../controllers/products');

router.get('/', all);
router.get('/category/:category', allCategory);
router.get('/detail/:id', single);
/* router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteProd); */

module.exports = router;
