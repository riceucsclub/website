import React, { useState } from 'react';
import Footer from './Components/Footer'
import Box from './Components/Box';
import Header from './Components/Header';
import triangles from './Files/Triangles.svg';
import boxText from './Files/boxText'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ContactPage from './Pages/Contact/ContactPage'
import EventsPage from './Pages/Events/EventsPage'
import HomePage from './Pages/Home/HomePage'
import ResourcesPage from './Pages/Resources/ResourcesPage'
import AboutPage from './Pages/About/AboutPage'




function App() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['Home', 'About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  let link ='';
  
  return (
    <div>
      
      <Router>
      <Header 
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              tabs={tabs}
              text={text}
              link={link}/>

        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path='/contact'>
            <ContactPage box = {boxText}/>
          </Route>
          <Route path='/events'>
            <EventsPage box = {boxText}/>
          </Route>
          <Route path='/resources'>
            <ResourcesPage box = {boxText}/>
          </Route>
          <Route path='/about'>
            <AboutPage/>
          </Route>
        </Switch>
      </Router>

      
      </div>
  );
}

export default App;
