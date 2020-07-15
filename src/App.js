import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Box from './Components/Box'


function App() {
  
  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';

  const name = "Resume Reviews"
  const blurb = `Bring your resumes and get feedback and advice from upper classmen and an invited experienced 
  professional who has extensive experience reviewing and evaluating resumes. We will discuss 
  resume content and formatting tips and provide constructive criticism in an informal setting.  
  A resume review session is usually held during the week before the university career expo.` 

  return (
    <div>
      <Header 
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        tabs={tabs}
        text={text}
      />
      <Box title = {name} desc = {blurb}/>
      <Footer/>
    </div>
  );
}

export default App;