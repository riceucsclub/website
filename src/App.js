import React, { useState } from 'react';
import Footer from './Components/Footer'
import Box from './Components/Box';
import Header from './Components/Header';
import triangles from './Files/Triangles.svg';
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
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  let link ='';
  
  return (
    <div>
      
      <Router>
      <Header 
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              tabs={tabs}
<<<<<<< HEAD
              text={text}/>
      <div className="flex text-gray-500 text-5xl font-extrabold justify-center">{head}</div>
      <p className="flex justify-center">If you need to contact club leadership, email us here.</p>
      <p className="flex justify-center">Stay up to date on the latest events and activities by subscribing to our mailing list.</p>
      <div className="flex text-gray-500 text-3xl font-extrabold justify-center py-4">Looking to get involved from outside of Rice?</div>
      <p className="flex justify-center">Check out these opportunitues!</p>
      <img className="absolute bg-no-repeat bg-left" src={triangles} width="100px" height="100px"/>
      <div className="flex justify-around py-5">
      <Box title={title1} body={body1}/>
      <Box title={title2} body={body2}/>
      </div>
=======
              text={text}
              link={link}/>

        <Switch>
          <Route exact path="/">
          <ContactPage/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>
          <Route path='/resources'>
            <ResourcesPage/>
          </Route>
        </Switch>
      </Router>

>>>>>>> c8c54362bc8087bf73e674ffc32d3411e0e65a5a
      
      </div>
  );
}

export default App;
