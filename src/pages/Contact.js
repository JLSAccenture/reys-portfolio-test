import React from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/contact.css'
import { useForm } from '@formspree/react'

const Contact = () => {

  // state, setState
  const [ state, formSubmit ] = useForm("xjvdzapd")
    if (state.succeeded) {
      return(
        <div>
          <h1>Message sent!</h1>
          <button>Go to home page</button>
        </div>
      )
    }

  return (
    <Layout>
      <div id='form-container'>
        <h1>Contact</h1>
        <form onSubmit={formSubmit} method='POST' id='form-card'>
          <label className='form-label'>First Name<br/>
            <input className='form-input'
              placeholder='First Name'
              type='name'
              name='first name'
            ></input>
          </label>
          <label className='form-label'>Last Name<br/>
            <input className='form-input'
              placeholder='Last Name'
              type='name'
              name='last name'
            ></input>
          </label>
          <label className='form-label'>Email<br/>
            <input className='form-input'
              placeholder='Email Address'
              type='email'
              name='email'
            ></input>
          </label>
          <label>Message<br/>
          <textarea id='message-area'></textarea>
          </label>
          <button id='form-submit'
            type='submit' disabled={state.submitting}>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
