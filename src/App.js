import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Box from './Components/Box'

import triangles from './Triangles.svg'



function App() {
  
  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';

  // const nameR = "Resume Reviews"
  // const blurbR = `Bring your resumes and get feedback and advice from upper classmen and an invited experienced 
  // professional who has extensive experience reviewing and evaluating resumes. We will discuss 
  // resume content and formatting tips and provide constructive criticism in an informal setting.  
  // A resume review session is usually held during the week before the university career expo.` 

  // const nameA = 'Algorithm Challenge'
  // const blurbA = `Got technical interviews lined up from all those companies you applied to? Algorithm challenge 
  // can help you with those interviews! In these sessions, we’ll go over many popular technical problems and how to 
  // analyze, solve, and present them. Excellent for those interested in some real technical interview practice. 
  // Algorithm challenges are usually held every other week.`

  const nameT = 'Tech Talks and Info Sessions'
  const blurbT = `Tech Talks are a great way to get Rice students interested in what your company does and get in 
  contact with potential interns and employees. If you are interested in hosting one of these, please email our 
  current President Luis Clague. Please be ready to provide a preferred date, time, and duration.`

  const nameS = 'Sponsorship'
  const blurbS = `Putting together HackRice every year is expensive, so we really appreciate all of our sponsors. 
  If you’d like to support HackRice and other club activities financially, we have a variety of sponsorship packages 
  available. Please contact our current HackRice Chair Anthony Cho for more information.`

  return (
    <div>
      <Header 
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        tabs={tabs}
        text={text}
      />
      
      <img class = "absolute mt-32 bg-no-repeat bg-left" src={triangles} width="375px" height="375px"/>

      <div class = 'text-center'>
        <div class = 'text-6xl font-semibold'>
          We love hearing from you!
        </div>
        <div class = 'text-xl mt-3 text-light'>
          <div>
            If you need to contact club leadership, email us here.
          </div>
          <div>
            Stay up to date on the latest events and activities by subscribing to our mailing list.  
          </div>
        </div>
        <div class = 'text-2xl font-medium mt-10'>
          Looking to get involved from outside of Rice?
        </div>
        <div class = 'text-xl text-light'>
          Check out these opportunities!
        </div>
      </div>

      <div class = 'flex flex-row justify-around mx-64'>
        <Box title = {nameT} desc = {blurbT}/>
        <Box title = {nameS} desc = {blurbS}/>
      </div>

      

      <Footer/>
    </div>
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