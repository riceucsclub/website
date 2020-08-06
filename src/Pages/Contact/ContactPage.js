import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import boxText from '../../Files/boxText'

import triangles from '../../Files/Triangles.svg'

function ContactPage(props){

    console.log(props, 'prop');
    
    const [activeTag, setActiveTag] = useState("");
    const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
    let text = '';

    return(
        <div>
        
            <img class = "absolute mt-32 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/>

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

            <div class = 'flex justify-around mx-64 mt-20 mb-40'>
                <Box title = {boxText["nameT"]} desc = {boxText["blurbT"]}/>
                <Box title = {props.box["nameS"]} desc = {props.box["blurbS"]}/>
            </div>

        </div>
    )
}
export default ContactPage