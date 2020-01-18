import { AuthCodeService } from "../services/AuthCodeService";

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function (req, res, next) {
    let authCodeService = new AuthCodeService();
    res.json(authCodeService.save(req.query));
});

router.get('/auth_code', function (req, res, next) {
    let authCodeService = new AuthCodeService();
    res.json(authCodeService.findAll());
});

module.exports = router;
