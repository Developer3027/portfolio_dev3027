import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Kathryn from './components/Kathryn/Kathryn'
import Home from './components/Home/Home'

import './App.css'

function App () {
  return (
    <>
      <Navbar>
        <NavItem link='Projects'>
          <ProjectDropdownMenu />
        </NavItem>
        <NavItem link='Packages' />
        <NavItem link='Resources' />
      </Navbar>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/kathryn'>
            <Kathryn />
          </Route>
        </Switch>
      </main>
    </>
  )
}

function ProjectDropdownMenu () {
  const [open, setOpen] = useState(false)
  function DropdownItem (props) {
    return (
      <Link
        to={props.link}
        className='menu-item'
        onMouseEnter={e => {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        <span className='icon-btn'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-btn'>{props.rightIcon}</span>
      </Link>
    )
  }
  return (
    <div className='dropdown'>
      <DropdownItem link='/kathryn'>Kathryn</DropdownItem>
    </div>
  )
}

function Navbar (props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  )
}

function NavItem (props) {
  const [open, setOpen] = useState(false)
  return (
    <li className='nav-item'>
      <a
        className='link-btn'
        onMouseEnter={e => {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        {props.link}
      </a>
      {open && props.children}
    </li>
  )
}

export default App
