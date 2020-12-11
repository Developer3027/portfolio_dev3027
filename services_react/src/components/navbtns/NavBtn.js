import React from 'react'
import { Link } from 'react-router-dom'
import './NavBtn.css'

const NavBtn = () => {
  return (
    <div className='nav-wrapper'>
      <ul>
        <h4>Projects</h4>
        <Link to='/bounce'>
          <li className='button'>Bounce</li>
        </Link>
        <Link to='/portfolio'>
          <li className='button'>Portfolio</li>
        </Link>
        <Link to='/dev-blog'>
          <li className='button'>Dev Blog</li>
        </Link>
        <Link to='/nutrasite'>
          <li className='button'>NutraSite</li>
        </Link>
        <Link to='/kathryn'>
          <li className='button'>Kathryn</li>
        </Link>
      </ul>
      <ul>
        <h4>Services</h4>
        <Link to='/landing'>
          <li className='button'>Landing Page</li>
        </Link>
        <Link to='/blog'>
          <li className='button'>Blog Site</li>
        </Link>
        <Link to='/service'>
          <li className='button'>Service Site</li>
        </Link>
        <Link to='/ecommerce'>
          <li className='button'>Ecommerce Site</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBtn
