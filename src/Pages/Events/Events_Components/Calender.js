import React from 'react'
import FutureEvent from './FutureEvent'
import allEvents from '../../../Files/allEvents'





function Calender() {


    let eventlist = []

    // Moved the google calendar draw to the allEvents.js page in Files
            
    //imports json with all future events and makes event objects from each entry

    for(let i = 0; i < allEvents.length; i++){
        console.log(allEvents[i])
        eventlist.push(
            <FutureEvent 
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
        <div>
            <subheading class = 'font-semibold text-2xl'>
                Upcoming Events
            </subheading>
            <events>
                {eventlist}
            </events>
        </div>
    )
}

export default Calender