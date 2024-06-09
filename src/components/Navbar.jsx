import React from 'react'
import '../Styles/Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [onclick, setOnclick] = React.useState(false)

  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>PortFolio</h1>
        </div>
        
        
        <div className='nav-links'>
          <div className='nav-items'>
            <ul> <a href="/">Home</a></ul>
            <ul><a href="/About">About</a></ul>
            <ul><a href="/project">Projects</a></ul>
            <ul><a href="/contact">Contact</a></ul>
          </div>
          <div className='toggle' onClick={() => setOnclick(!onclick)}>
        {onclick ? <FaTimes /> : <FaBars />}</div>
        </div>
          
        
        
    </div>
  )
}

export default Navbar