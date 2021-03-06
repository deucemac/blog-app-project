import React from 'react'
import './Layout.css'
import Nav from '../header/Nav'
import Footer from '../footer/Footer'

const Layout = (props) => (
  <div className='layout'>
    <Nav />
    <div className="layout-children">
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout