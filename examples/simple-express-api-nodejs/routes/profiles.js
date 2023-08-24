var express = require('express');
const randomProfiles = require('../services/randomProfileGenerator');
var router = express.Router();

var cors = require('cors');

/* GET users listing. */
router.get('/', cors(), function (req, res, next) {
  res.header('Content-Type', 'application/json');
  res.send(randomProfiles(req.query.total || 1));
});

module.exports = router;
