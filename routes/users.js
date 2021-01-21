const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.send('Registers user')
});

module.exports = router;