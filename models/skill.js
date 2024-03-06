const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill:'CSS', done: true},
    {id: 3, skill:'JavaScript', done: true},
    {id: 4, skill:'NodeJS', done: true},
    {id: 5, skill:'ExpressJS', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
}

function getAll() {
    return skills;
  }
 
function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}