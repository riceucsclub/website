import React from 'react'
import FutureEvent from './FutureEvent'

function Calender() {
    //imports json with all future events and makes event objects from each entry

    return (
        <div>
            <subheading class = 'font-semibold text-2xl'>
                Future Events
            </subheading>
            <events>
                <FutureEvent/>
            </events>
        </div>
    )
}

export default Calender