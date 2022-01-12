import React from 'react'
import allEvents from '../../../Files/allEvents'
import EventBox from './EventBox'

function EventWheel() {

    let eventlist = []

    if (allEvents.length > 0) {
        for (let i = 0; i < 3; i++) {
            // if fewer than 3 events, shows only 1-2
            if (allEvents[i]) {
                console.log(allEvents[i])
                eventlist.push(
                    <EventBox
                        title={allEvents[i]["title"]}
                        month={allEvents[i]["month"]}
                        day={allEvents[i]["day"]}
                        time={allEvents[i]["time"]}
                        endMonth={allEvents[i]["endMonth"]}
                        endDay={allEvents[i]["endDay"]}
                        locale={allEvents[i]["locale"]}
                        desc={allEvents[i]["desc"]}
                        link={allEvents[i]["link"]}
                    />
                )
            }
        }
    } else {
        eventlist.push(<h1 class="text-md text-center -mt-5 mx-5">No events currently scheduled... Check back later!</h1>)
    }

    return (
        <div class='flex flex-col justify-center'>
            <div class="font-semibold text-center text-3xl md:text-4xl">
                Check out our events!
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center mt-12 md:space-x-12">
                {eventlist}
            </div>

        </div>
    )
}

export default EventWheel
