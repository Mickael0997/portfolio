const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenue sur une autre page');
});

module.exports = router;