import React, { useState, useEffect} from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {

  const apiURL = 'https://swapi.dev/api/'

  const selection = 'films'

  const [ testData, setTestData ] = useState(null)

  const getTestData = async () => {
    const response = await fetch(`${apiURL}${selection}`)
    const data = await response.json()
    setTestData(data)
  }

  useEffect(() => {
    getTestData()
  }, [])

  // console.log('this is data', testData)

  const loaded = () => {

    return (

    testData.results.map((result, index) => {
      console.log('result = ', result)
      return (
        <div key={index}>
          <h2>Test Data 1: {result.title}</h2>
          {
            result.starships.map((starship, index) => {
              // console.log('subarray = ', starship)
              return (
                <>
                <h3>Subarray: {starship}</h3>
                </>
              )
            })
          }
        </div>
      )
    })
    )
  }

  const loading = () => {
    return(
      <h1>Loading...</h1>
    )
  }

  return testData ? loaded() : loading()
  // return (
  //   <Layout>
  //       <div>
  //           <h1>About Me</h1>
  //       </div>
  //   </Layout>
  // )
}

export default About
