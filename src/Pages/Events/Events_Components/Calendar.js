import React from "react";
import FutureEvent from "./FutureEvent";
import allEvents from "../../../Files/allEvents";

function Calender() {
  let eventlist = [];

  // Moved the google calendar draw to the allEvents.js page in Files

  //imports json with all future events and makes event objects from each entry
  // if (allEvents.length > 0) {
  //   for (let i = 0; i < allEvents.length; i++) {
  //     console.log(allEvents[i]);
  //     eventlist.push(
  //       <FutureEvent
  //         title={allEvents[i]["title"]}
  //         month={allEvents[i]["month"]}
  //         day={allEvents[i]["day"]}
  //         time={allEvents[i]["time"]}
  //         locale={allEvents[i]["locale"]}
  //         desc={allEvents[i]["desc"]}
  //         link={allEvents[i]["link"]}
  //       />
  //     );
  //   }
  // } else {
  //   eventlist.push(<h1 class="flex flex-row my-4 mx-1/6 md:mx-36 xl:mx-72">No events currently scheduled... Check back later!</h1>)
  // }

  

  return (
    <div>
      <subheading class="font-semibold text-2xl py-2 md:mx-32 xl:mx-64">
        Upcoming Events
      </subheading>
      <iframe src="https://calendar.google.com/calendar/embed?src=o10val6sb8gbqt74v3tle2deeg%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  );
}

export default Calender;
