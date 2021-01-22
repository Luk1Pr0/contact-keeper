const express = require('express');
const Contact = require('../models/Contacts');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const { request } = require('express');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.post('/', (req, res) => {
    res.send('Add new contact')
});

router.put('/:id', (req, res) => {
    res.send('Update contact')
});

router.delete('/:id', (req, res) => {
    res.send('Delete contact')
});

module.exports = router;