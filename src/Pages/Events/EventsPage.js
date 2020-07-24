import React, { useState } from 'react'
// import Header from '../../Components/Header'
// import Footer from '../../Components/Footer'
// import Box from '../../Components/Box'

// import triangles from '../../Files/Triangles.svg'
// import {
//   nameE, blurbE,
//   nameH, blurbH
// } from '../../Files/allText'

function EventsPage(){
    
    const [activeTag, setActiveTag] = useState("");
    const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
    let text = '';

    return(
        <div>
            {/* <Header 
                activeTag={activeTag}
                setActiveTag={setActiveTag}
                tabs={tabs}
                text={text}
            />
            
            <img class = "absolute mt-32 bg-no-repeat bg-left" src={triangles} width="375px" height="375px"/>

            <div class = 'text-center'>
                <div class = 'text-6xl font-semibold'>
                    Check us out!
                </div>
                <div class = 'text-xl mt-3 text-light'>
                    To get notified of upcoming events, subscribe to our mailing list.
                </div>
            </div>


            <div class = 'flex justify-around mx-64 mt-16'>
                <Box title = {nameE} desc = {blurbE}/>
                <Box title = {nameH} desc = {blurbH}/>
            </div>

            

            <Footer/> */}
        </div>
    )
}
export default EventsPage