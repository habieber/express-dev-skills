var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */

//ALL actual paths begin with "/skills"
router.get('/', skillsCtrl.index);

//GET for the form --> /skills/new
router.get('/new', skillsCtrl.new);

//GET a skill --> /:id/edit
router.get('/:id/edit', skillsCtrl.edit);

router.get('/:id', skillsCtrl.show);

//POST a skill --> /skills
router.post('/', skillsCtrl.create);

//DELETE a skill --> /:id
router.delete('/:id', skillsCtrl.delete);

//POST a skill edit -->
router.put('/:id', skillsCtrl.update);

module.exports = router;
