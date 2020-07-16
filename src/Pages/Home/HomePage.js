import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import AboutPage from '../About/AboutPage'
  import ContactPage from '../Contact/ContactPage'
  import EventsPage from '../Events/EventsPage'
  import ResourcesPage from '../Resources/ResourcesPage'

function HomePage() {
    return (
      <div>
        
        <Router> 

            <Header />

                <div className = "p-3">

                    <Switch> 

                        <Route exact path ="/"> 
                            <Home />
                        </Route>

                        <Route path = "/about"> 
                            <AboutPage />
                        </Route>

                        <Route path = "/contact"> 
                            <ContactPage />
                        </Route>

                        <Route path = "/events"> 
                            <EventsPage />
                        </Route>

                        <Route path = "/resources"> 
                            <ResourcePage />
                        </Route>

                    </Switch>

                </div>
    

                <Footer />

            </Router>

        </div>
    );
  }

export default HomePage