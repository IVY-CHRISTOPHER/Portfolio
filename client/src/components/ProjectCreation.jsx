import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProjectCreation = (props) => {
    const navigate = useNavigate()
    const { projects, setProjects } = props;

    const [form, setForm] = useState({
        project_name: "",
        project_description: "",
        project_url: "",
        project_img: ""
    })

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("FE Form - ", form)
        axios.post('http://localhost:5000/api/projects', form, {withCredentials: true})
            .then((res) => {
                console.log(res)
                navigate('/')
                setProjects([...projects, form])
                console.log("FE Projects - ", projects);
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response);
            })
    }

    return (
        <>
            <div>
                <h2>Add a Project!</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Project Name:</label>
                        <input
                            type="text"
                            name="project_name"
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Project Description:</label>
                        <textarea
                            name="project_description"
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Project URL:</label>
                        <input
                            type="text"
                            name="project_url"
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label>Project Image URL:</label>
                        <input
                            type="text"
                            name="project_img"
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="submit">Create Project</button>
                    <Link to="/">Cancel</Link>
                </form>
            </div>
        </>
    )
}


export default ProjectCreation