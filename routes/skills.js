var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */

//ALL actual paths begin with "/skills"
router.get('/', skillsCtrl.index);

//GET /skills/new
router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

module.exports = router;
