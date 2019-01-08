const express = require('express');
const router = express.Router();

const TITLE = "Gyankriti Reboot";

router.get('/', function (req, res) {
    console.log("get / : render index using /");
    res.render('index', {TITLE: TITLE});
});

router.get('/index', function (req, res) {
    console.log("get /index : render using /index");
    res.render('index', {TITLE: TITLE});
});

module.exports = router;