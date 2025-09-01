const ProjectController = require('../controllers/project.controller');

module.exports = app => {
    app.get('/api/projects', ProjectController.findAllProjects);
    app.get('/api/projects/:id', ProjectController.findOneProject);
    app.post('/api/projects', ProjectController.createProject);
    app.patch('/api/projects/:id', ProjectController.updateProject);
    app.delete('/api/projects/:id', ProjectController.deleteProject);
}