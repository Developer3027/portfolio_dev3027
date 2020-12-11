import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBtn from './components/navbtns/NavBtn'
import Home from './components/Home/Home'
import Bounce from './components/Bounce/Bounce'
import Portfolio from './components/Portfolio/Portfolio'
import NutraSite from './components/Nutrasite/Nutrasite'
import Kathryn from './components/Kathryn/Kathryn'
import DevBlog from './components/DevBlog/DevBlog'
import Landing from './components/Landing/Landing'
import BlogService from './components/DevBlog/BlogService'
import Service from './components/Service/Service'
import Ecommerce from './components/ecommerce/Ecommerce'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <div className='main-table'>
        <div className='menu-col'>
          <NavBtn />
        </div>
        <div className='submenu-col'></div>
        <div className='main-col'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/bounce'>
              <Bounce />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/dev-blog'>
              <DevBlog />
            </Route>
            <Route path='/nutrasite'>
              <NutraSite />
            </Route>
            <Route path='/kathryn'>
              <Kathryn />
            </Route>
            <Route path='/landing'>
              <Landing />
            </Route>
            <Route path='/blog'>
              <BlogService />
            </Route>
            <Route path='/service'>
              <Service />
            </Route>
            <Route path='/ecommerce'>
              <Ecommerce />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
