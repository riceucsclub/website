import React, { useState } from 'react'
import boxText from './Files/boxText'

import ContactPage from './Pages/Contact/ContactPage'
// import EventsPage from './Pages/Events/EventsPage'






function App() {
  
  return (
    <ContactPage box = {boxText}/>
    // <EventsPage box = {boxText}/>
  );
}

export default App;

// boxes for resource page
{/* <Header 
  activeTag={activeTag}
  setActiveTag={setActiveTag}
  tabs={tabs}
  text={text}
/>
<div class = 'flex flex-row justify-center'>
  <Box title = {nameR} desc = {blurbR}/>
  <Box title = {nameA} desc = {blurbA}/>
</div>
<Footer/>  */}