import React from 'react'
import './Header.css'
import MenuLink from '../MenuLink/MenuLink'

function Header() {
  return (
    <div id="navcontent">
        {/* <h3>Header content</h3> */}
        {/* <a href="http://www.react.dev"><img src={logo} alt="React"/></a> */}

        <div>
          <MenuLink linkname="Home" url="#home"/>
          <MenuLink linkname="About" url="#about"/>
          <MenuLink linkname="Contact" url="#contact"/>
          <MenuLink linkname="Login" url="#login"/>                              
        </div>
    </div>
  )
}

export default Header