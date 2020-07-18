import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'

import triangles from '../../Files/Triangles.svg'
import {
  nameT, blurbT,
  nameS, blurbS
} from '../../Files/allText'

function ContactPage(){
    const [activeTag, setActiveTag] = useState("");
    const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
    let text = '';

    return(
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
            <div class = 'text-2xl font-medium mt-16'>
            Looking to get involved from outside of Rice?
            </div>
            <div class = 'text-xl text-light'>
            Check out these opportunities!
            </div>
        </div>

        <div class = 'flex justify-around mx-64 mt-16'>
            <Box title = {nameT} desc = {blurbT}/>
            <Box title = {nameS} desc = {blurbS}/>
        </div>

        

        <Footer/>
        </div>
    )
}
export default ContactPage