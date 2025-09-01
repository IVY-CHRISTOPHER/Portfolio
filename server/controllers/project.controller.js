const Project = require('../models/project.model');

//Crud Operations

//Creates a Project
module.exports = {
    createProject: async (req, res) => {
        try {
            const newProject = await Project.create(req.body);
            res.status(201).json(newProject);
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err);
        }
    }
}

//Finds and displays all projects
module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then((allProjects) => {
            res.json(allProjects);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all projects", Error: err });
        });
};

//Finds and displays ONE project
module.exports.findOneProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then((oneProject) => {
            res.json(oneProject);
        })
        .catch ((err) => {
            res.status(400).json({ message: "Error finding one project", Error: err})
    });
}

//Update a Project /w prefilled info
module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProject) => {
            res.json(updatedProject);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error updating Project", Error: err })
        });
};

//!Deletes a Project
module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then((deletedProject) => {
            res.json(deletedProject)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error deleting Project", Error: err })
        });
};
