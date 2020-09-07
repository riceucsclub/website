import React, { useState } from 'react';
import Footer from './Components/Footer'
import Box from './Components/Box';
import Header from './Components/Header';
import triangles from './Files/Triangles.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import ContactPage from './Pages/Contact/ContactPage'
import EventsPage from './Pages/Events/EventsPage'
import HomePage from './Pages/Home/HomePage'
import ResourcesPage from './Pages/Resources/ResourcesPage'
import AboutPage from './Pages/About/AboutPage'
import CSIO_Page from './Pages/CSIO/CSIO_Page'



function App() {

  
  return (
    <div>
      
      <Router>

        <Switch>
          <Route exact path="/">
          <HomePage/>
          </Route>
          <Route exact path='/contact'>
            <ContactPage/>
          </Route>
          <Route exact path='/resources'>
            <ResourcesPage/>
          </Route>
          <Route exact path='/about'>
            <AboutPage/>
          </Route>
          <Route exact path='/csio'>
            <CSIO_Page/>
          </Route>
        </Switch>
      </Router>

      
      </div>
  );
}

export default App;
