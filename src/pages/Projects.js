import React from 'react'
import Layout from '../components/Layout/Layout'
import projectsData from '../json/projects.json'
import '../styles/projects.css'
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

  const projects = projectsData.projects

  console.log('this is projects ', projects)

  return(
    <>
    <Layout>
      <h1>Projects</h1>
       <div  className='projects-container'>
      {
        projects.map((project, index) => {
        
          return (
              <div key={index} className='project-card'>
              <h2>{project?.name}</h2>
              <h3>{project?.stack}</h3>

              <img className='project-image' src={project?.image} alt="image1"/>
              <p>{project?.description}</p>
              <div className='project-links-container'>
                <a href={project?.project_url} target="_blank" rel="noreferrer">
                  <LaptopIcon/>

                  <p>Go to Site</p>
                </a>
                <a href={project?.github} target="_blank" rel="noreferrer">
                  <GitHubIcon/>
                  <p>Go to github</p>
                </a>

              </div>
              </div>
          )  
        })
      }
      </div>
    </Layout>
    </>
  )  
}

export default Projects
