import React, { useState } from 'react';
import Footer from './Components/Footer'
import Box from './Components/Box'
import Header from './Components/Header'


function App() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';

  return (
    <div>
      <Header 
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              tabs={tabs}
              text={text}/>
      <Box/>
      <Footer/>
    </div>
  );
}

export default App;
