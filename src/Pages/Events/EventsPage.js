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
            {/* <img class = "opacity-0 md:opacity-100 absolute z-10 mt-36 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/> */}

            <div class = 'text-center'>
                <div className="relative z-10 flex text-rice-blue text-4xl lg:text-5xl laptop-l:text-6xl font-bold justify-center pt-100px pb-10">
                    Check Us Out!
                </div>
                <h1 className="flex text-gray-500b text-2xl justify-center px-1/6">
                    To get notified of upcoming events, subscribe to our mailing list.
                </h1>
            </div>


            <div class = 'hidden md:flex md:px-32 xl:px-64 relative z-20 flex justify-around mt-16'>                
                <Box title = {props.box["nameE"]} desc = {props.box["blurbE"]}/>
                <Box title = {props.box["nameH"]} desc = {props.box["blurbH"]}/>
            </div>

            <div className="md:hidden flex relative flex-col justify-center items-center mx-1/6">
                <div class = "flex flex-col text-2xs md:text-base text-center items-center my-5 px-5 py-2 bg-white rounded-lg border-4 border-rice-blue">
                    <h2 class = "text-xl font-semibold">{props.box["nameE"]}</h2>
                    <p>{props.box["blurbE"]}</p>
                </div>
                <div class = "flex flex-col text-2xs md:text-base text-center items-center my-5 px-5 py-2 bg-white rounded-lg border-4 border-rice-blue">
                    <h2 class = "text-xl font-semibold">{props.box["nameH"]}</h2>
                    <p>{props.box["blurbH"]}</p>
                </div>
            </div>

            <div class = 'grid justify-center relative z-10 mt-16 mb-8'>
                <Calender/>
            </div>
            <Footer/>
        </div>
    )
}
export default EventsPage