import {CampeonatoService} from '../services/CampeonatoService';

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function (req, res, next) {
    let campeonatosService = new CampeonatoService();
    res.json(campeonatosService.findAll());
});

router.post('/', function (req, res, next) {
    let campeonatosService = new CampeonatoService();
    res.json(campeonatosService.save(req.body));
});

module.exports = router;
