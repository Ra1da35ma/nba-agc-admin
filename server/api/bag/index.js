'use strict';

var express = require('express');
var controller = require('./bag.controller');
var sessionSec = require('../../components/tools/sessionSec');

var router = express.Router();

router.get('/', sessionSec, controller.index);

module.exports = router;