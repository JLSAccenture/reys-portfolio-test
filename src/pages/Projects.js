import React from 'react'
import Layout from '../components/Layout/Layout'
import projectsData from '../json/projects.json'
import '../styles/projects.css'

const Projects = () => {

  const projects = projectsData.projects

  console.log('this is projects ', projects)

  return(
    <>
    <Layout>
      <h1>Projects</h1>
      {
        projects.map((project, index) => {
        
          return (
            <div key={index} className='projects-container'>
              <div className='project-card'>
              <h2>{project?.name}</h2>

              <img className='project-image' src={project?.image} alt="image1"/>
              </div>
            </div>
          )  
        })
      }
    </Layout>
    </>
  )  
}

export default Projects
