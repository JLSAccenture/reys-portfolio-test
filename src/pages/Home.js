import React from 'react'
import Layout from '../components/Layout/Layout'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../styles/home.css'

const Home = () => {
  return (
    <Layout>
      {/* <h1>Home Page</h1> */}
      <div className='upper-container'>
        <img id='hero-image' src='https://res.cloudinary.com/dz060iham/image/upload/v1684884381/Portfolio_image_copy_ah0csy.jpg' alt='hero'/>
        <p id='about-me-text'>I am a talented designer who loves to be creative and have great ideas for developing meticulous projects with up-to-date software & programming languages. In addition, I have an insatiable desire for knowledge, always up for new challenges that will help me improve my creativity and acquire new web development skills. I'm looking to be a permanent web design student and utilize my capabilities of troubleshooting, critical thinking and problem solving with the right engineering team who I can grow professional with.</p>




        <div id='links-container'>
          <div id='resume-card'>
            <p>Resume</p>
            <a>
              <FileDownloadIcon fontSize='large'/>
            </a>
          </div>
          <div id='resume-card'>
            <p>Linkedin</p>
            <a>
              <FileDownloadIcon fontSize='large'/>
            </a>
          </div>
        </div>



      </div>
    </Layout>
  )
}

export default Home
