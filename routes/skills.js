var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */

//ALL actual paths begin with "/skills"
router.get('/', skillsCtrl.index);

//GET for the form --> /skills/new
router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

//POST a skill --> /skills
router.post('/', skillsCtrl.create);

module.exports = router;
