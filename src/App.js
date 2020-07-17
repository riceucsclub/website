import React, { useState } from 'react';
import Footer from './Components/Footer'
import Box from './Components/Box';
import Header from './Components/Header';
import triangles from './Triangles.svg';

//import ContactPage from './Pages/Contact/ContactPage'



function App() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  const head = "We love hearing from you!";
  let title1 = 'Tech Talks';
  let body1 = 'Tech Talks are a great way to get Rice students interested in what your company does and get in contact with potential interns and employees. If you are interested in hosting one of these, please email our current President Luis Clague. Please be ready to provide a preferred date, time, and duration.'
  let title2 = "Sponsorship";
  let body2 = 'Putting together HackRice every year is expensive, so we really appreciate all of our sponsors. If you’d like to support HackRice and other club activities financially, we have a variety of sponsorship packages available. Please contact our current HackRice Chair Anthony Cho for more information.';

  return (
    <div>
       
      <Header 
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              tabs={tabs}
              text={text}/>
      <div className="flex text-gray-500 text-5xl font-extrabold justify-center">{head}</div>
      <p className="flex justify-center">If you need to contact club leadership, email us here.</p>
      <p className="flex justify-center">Stay up to date on the latest events and activities by subscribing to our mailing list.</p>
      <div className="flex text-gray-500 text-3xl font-extrabold justify-center py-4">Looking to get involved from outside of Rice?</div>
      <p className="flex justify-center">Check out these opportunitues!</p>
      <img className="bg-no-repeat bg-left" src={triangles} width="100px" height="100px"/>
      <div className="flex justify-around py-5">
      <Box title={title1} body={body1}/>
      <Box title={title2} body={body2}/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
