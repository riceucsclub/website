import React from 'react'
import allEvents from '../../../Files/allEvents'
import EventBox from './EventBox'

function EventWheel () {

    let eventlist = []

    for(let i = 0; i < 3; i++){
        console.log(allEvents[i])
        eventlist.push(
            <EventBox 
                title = {allEvents[i]["title"]}
                month = {allEvents[i]["month"]}
                day = {allEvents[i]["day"]}
                time = {allEvents[i]["time"]}
                locale = {allEvents[i]["locale"]}
                desc = {allEvents[i]["desc"]}
                link = {allEvents[i]["link"]}
            />
        )
    }

    return (
        <div class = 'flex flex-col items-center'>
            <div class = "font-bold text-center">
                Check out our events!
            </div>
            <div class = "flex justify-around w-5/6">
                {eventlist}    
            </div>
            
        </div>
    )
}

export default EventWheel
