const express = require('express');
const router = express.Router();

const TITLE = "Gyankriti Reboot";

router.get('/', function (req, res) {
    res.render('index', {TITLE: TITLE});
});

router.get('/index', function (req, res) {
    res.render('index', {TITLE: TITLE});
});

module.exports = router;