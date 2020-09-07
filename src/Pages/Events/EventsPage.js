import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import Calender from './Events_Components/Calender'


import triangles from '../../Files/Triangles.svg'


function EventsPage(props){
    
    const [activeTag, setActiveTag] = useState("");
    const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
    let text = '';

    return(
        <div>
            <Header/>
            <img class = "absolute z-10 mt-36 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/>

            <div class = 'text-center'>
                <div class = 'text-5xl font-semibold'>
                    Check us out!
                </div>
                <div class = 'text-xl mt-3 text-light'>
                    To get notified of upcoming events, subscribe to our mailing list.
                </div>
            </div>


            <div class = 'relative z-10 flex justify-around px-64 mt-16'>
                <Box title = {props.box["nameE"]} desc = {props.box["blurbE"]}/>
                <Box title = {props.box["nameH"]} desc = {props.box["blurbH"]}/>
            </div>

            <div class = 'relative z-10 px-120 mt-16 mb-12'>
                <Calender/>
            </div>
            <Footer/>
        </div>
    )
}
export default EventsPage