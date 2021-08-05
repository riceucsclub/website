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
            <img class = "opacity-0 md:opacity-100 absolute z-10 mt-36 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/>

            <div class = 'text-center'>
                <div class = 'text-5xl font-semibold'>
                    Check us out!
                </div>
                <div class = 'px-4 text-2xl mt-3 text-light'>
                    To get notified of upcoming events, subscribe to our mailing list.
                </div>
            </div>


            <div class = 'md:px-32 xl:px-64 relative z-20 flex justify-around mt-16'>                
                <Box title = {props.box["nameE"]} desc = {props.box["blurbE"]}/>
                <Box title = {props.box["nameH"]} desc = {props.box["blurbH"]}/>
            </div>

            <div class = 'grid justify-center relative z-10 mt-16 mb-8'>
                <Calender/>
            </div>
            <Footer/>
        </div>
    )
}
export default EventsPage