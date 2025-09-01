import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard'
import Bio from '../components/Bio'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import '../styles/Home.css'
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const { projects, setProjects } = props;

    const navigate = useNavigate();

    const getData = async () => {
        await axios.get('http://localhost:5000/api/projects')
            .then((res) => {
                setProjects(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='home-content'>
            <HeroSection />
            <div className='home-mid'>
                <Bio />
                <div className='project-list'>
                    {projects && projects.map((projects, index) => (
                        <div key={index}>
                            <ProjectCard project={projects} />
                        </div>
                    ))}
                    <Link to={"/createProject"} className='project-btn'>Create A Project</Link>
                </div>
            </div>
        </div>
    )
    }

export default Home