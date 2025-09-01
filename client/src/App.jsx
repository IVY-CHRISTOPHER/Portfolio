import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ProjectCreation from './components/ProjectCreation'
import { useState } from 'react'


import {Routes, Route } from 'react-router-dom'
function App() {
  const [projects, setProjects] = useState([])

  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home projects={projects} setProjects={setProjects} />} />
          <Route path='/createProject' element={<ProjectCreation />} />
        </Routes>
      </main>
    </>
  )
}

export default App
