
import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/header'
import './layout.css'
import { useStaticQuery,graphql } from 'gatsby'
import Footer from './Footer'

const Layout = ({ children }) => {

  


  return(
      <>
        <Header/>
        {children}
      </>
  )
  
}
Layout.propTypes = {
  children: PropTypes.func,
}
export default Layout;


