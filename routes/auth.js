const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get the logged in user');
});

router.post('/', (req, res) => {
    res.send('Authenticate user and get token');
});

module.exports = router;