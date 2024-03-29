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
    res.render('skills/edit', { 
        title: 'Edit Skill',
        skill
    })
}

function update(req, res) {
    req.body.done = !!req.body.done;
    console.log(req.body)
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}