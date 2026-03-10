var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('quadra', { title: 'Seja bem vindo a quadra!' });
});

router.get('/agendamentos', function(req, res, next) {
  res.render('agendamentos', { title: 'Você está em agendamentos.' });
});

module.exports = router;
