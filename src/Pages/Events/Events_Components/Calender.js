import React from 'react'
import FutureEvent from './FutureEvent'
import allEvents from '../../../Files/allEvents'
// import ApiCalendar from 'react-google-calendar-api';

import jQuery from 'jquery';




function Calender() {

    window.$ = window.jQuery = jQuery;

    let eventlist = []

    // Stuff to hook it up to the Google Cloud Api, CLIENT_ID and API_KEY are unique and would need to be changed but the other two are constant for the implementation
    let gapi = window.gapi;
    const CLIENT_ID = '643234596147-r77nllpnv4b8noku2grrm8e8radc4dgi.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyDmgrkOrEu0ZFMxT8ra1H42evtCDoKXhA8';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    const CAL_ID = '25h073198b7tpg7qcj6uhu1t8k@group.calendar.google.com';

    let calendar_data = [];
    jQuery.ajax({
        url:"https://www.googleapis.com/calendar/v3/calendars/" + CAL_ID + "/events?key=" + API_KEY,
        success: function(data) {
          console.log(data);
          calendar_data = data;
        }
          });
            
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