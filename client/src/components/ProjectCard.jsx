

function ProjectCard({ project }) {

    const deleteHandler = (e) => {
        e.preventDefault()
        axios.delete("http://localhost:8000/api/projects/:id")
        //TODO Finish Delete Code
    }

    return (
        <div className="project-card">
            <div className="project-poster">
                <img src={project.null} alt={project.project_name} />
                <button onClick={deleteHandler}>Delete</button>
            </div>
            <div className="project-info">
                <h2>{project.project_name}</h2>
                <h3>{project.project_description}</h3>
            </div>
        </div>
    )
}

export default ProjectCard