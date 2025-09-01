const mongoose = require('mongoose');
const { isURL } = require('validator');

const ProjectSchema = new mongoose.Schema(
    {
        project_name: {
            type: String,
            required: [true],
            trim: [true]
        },
        project_description: {
            type: String,
            required: [true],
            minLength: [8],
            trim: [true]
        },
        project_url: {
            type: String,
            required: [true]
        },
        project_img: {
            type: String,
            required: [false]
            //Insert File Drop Code here
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);