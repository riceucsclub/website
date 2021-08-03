import React from 'react'
import FutureEvent from './FutureEvent'
import allEvents from '../../../Files/allEvents'
// import ApiCalendar from 'react-google-calendar-api';


function Calender() {

    let eventlist = []

    // Stuff to hook it up to the Google Cloud Api, CLIENT_ID and API_KEY are unique and would need to be changed but the other two are constant for the implementation
    let gapi = window.gapi;
    const CLIENT_ID = '643234596147-r77nllpnv4b8noku2grrm8e8radc4dgi.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyDmgrkOrEu0ZFMxT8ra1H42evtCDoKXhA8';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    // Verify and log into a google account, attach to a button to open a window to select from multiple google accounts
    const handleClick = () => {
        gapi.load('client:auth2', () => {
          console.log('loaded client')
    
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
    
          gapi.client.load('calendar', 'v3', () => console.log('bam!'))
    
          gapi.auth2.getAuthInstance().signIn()
          .then(() => {
            
            var event = {
              'summary': 'Event 1',
              'location': '9 Sunset Blvd., Houston, TX 77005',
              'description': 'Stuff happens',
              'start': {
                'dateTime': '2021-08-28T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'end': {
                'dateTime': '2021-08-28T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=2'
              ],
              'attendees': [
                {'email': 'ghf2@rice.edu'},
                {'email': 'extella1217@gmail.com'}
              ],
              'reminders': {
                'useDefault': false,
                'overrides': [
                  {'method': 'email', 'minutes': 24 * 60},
                  {'method': 'popup', 'minutes': 10}
                ]
              }
            }
    
            var request = gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': event,
            })
    
            request.execute(event => {
              console.log(event)
              window.open(event.htmlLink)
            })
            
    
            
            // get events
            gapi.client.calendar.events.list({
              'calendarId': 'primary',
              'timeMin': (new Date()).toISOString(),
              'showDeleted': false,
              'singleEvents': true,
              'maxResults': 3,
              'orderBy': 'startTime'
            }).then(response => { // print out the three upcoming events
              const eventlist = response.result.items
              console.log('EVENTS: ', eventlist)
            })
            
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