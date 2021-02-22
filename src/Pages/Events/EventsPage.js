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
            <img class = "absolute z-10 mt-36 sm:opacity-50 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/>

            <div class = 'text-center'>
                <div class = 'text-5xl font-semibold'>
                    Check us out!
                </div>
                <div class = 'text-xl mt-3 text-light'>
                    To get notified of upcoming events, subscribe to our mailing list.
                </div>
            </div>


            <div classname = "relative z-10 flex justify-around mt-16 grid row-gap-8 col-gap-24 grid-cols-2 lg:grid-rows-1 justify-center sm:grid-rows-2">
                <Box title = {props.box["nameE"]} desc = {props.box["blurbE"]}/>
                <Box title = {props.box["nameH"]} desc = {props.box["blurbH"]}/>
            </div>

            <div class = 'relative z-10 px-108 mt-16 mb-8'>
                <Calender/>
            </div>
            <Footer/>
        </div>
    )
}
export default EventsPage