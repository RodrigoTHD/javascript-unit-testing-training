var express = require('express');
const randomProfiles = require('../services/randomProfileGenerator');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.header('Content-Type', 'application/json');
  res.send(randomProfiles(3));
});

module.exports = router;
