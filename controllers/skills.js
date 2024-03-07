const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.param.id);
    res.redirect('./');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id)
    console.log(skill)
    res.render('skills/edit', { 
        skill,
        title: 'Edit Skill',
    })
}

function update(req, res) {
    Skill.update(req.params.id, req.body.name)
    res.redirect('/skills')
}