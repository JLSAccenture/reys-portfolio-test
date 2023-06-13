import React from 'react'
import Topnav from '../Nav/Topnav'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: rgb(32,33,36);
}

h1 {
  color: white;
  font-size: 45px;
}

h2, h3, h4, h5, h6 {
  color: white;
}

p {
  color: white;
}

a {
  color: white;
}


`

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <Topnav />
      <section>{children}</section>
    </div>
  )
}

export default Layout
