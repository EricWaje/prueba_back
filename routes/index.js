var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

module.exports = router;
