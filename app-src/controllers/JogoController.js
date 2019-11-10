import {JogoService} from '../services/JogoService';
var express = require('express');
var router = express.Router();

router.get('/jogos', function(req, res, next) {
    let jogoService = new JogoService();
    res.json(jogoService.retornaJogos());
    
});

module.exports = router;
