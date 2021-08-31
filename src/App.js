import React, { useState } from 'react';

import boxText from './Files/boxText'
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
import Helmet from 'react-helmet';


function App() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['Home', 'About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  let link ='';
  
  return (

    <div>
      <Helmet>
        <title>{"Rice CS Club"}</title>
      </Helmet>
      
      
      <Router>
      

        <Switch>
          <Route exact path="/">
          <HomePage/>
          </Route>
          <Route exact path='/contact'>
            <ContactPage box = {boxText}/>
          </Route>
          <Route exact path='/resources'>
            <ResourcesPage box = {boxText}/>
          </Route>
          <Route exact path='/about'>
            <AboutPage box = {boxText}/>
          </Route>
          <Route exact path='/events'>
            <EventsPage box = {boxText}/>
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
