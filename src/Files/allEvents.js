import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

let eventlist = []

// Stuff to hook it up to the Google Cloud Api, API_KEY are unique
// Generating an API Key: https://developers.google.com/workspace/guides/create-project
const API_KEY = 'AIzaSyDmgrkOrEu0ZFMxT8ra1H42evtCDoKXhA8';

// This needs to be set to a PUBLIC Google calendar
// Also this type of access is read-only so you can't push events from the cs club website if you wanted to try that
// How to get calendar ID: https://yabdab.zendesk.com/hc/en-us/articles/205945926-Find-Google-Calendar-ID
const CAL_ID = '25h073198b7tpg7qcj6uhu1t8k@group.calendar.google.com';

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
let newEvents = [];

    jQuery.ajax({
        url:"https://www.googleapis.com/calendar/v3/calendars/" + CAL_ID + "/events?singleEvents=true&orderBy=startTime&sortOrder=ascending&timeMin=" + (new Date()).toISOString() + "&key=" + API_KEY,
        type: "GET",
        dataType: "json",
        async:false,
        // async lets the data stay saved after the inital call, otherwise the data will be removed after the success call
        success: function(data) {
          console.log(data);
          eventlist = data.items;
          console.log(eventlist);
        }
          });


          for(var i = 0; i < eventlist.length; i++){
            let hours = parseInt(eventlist[i].start.dateTime.substring(11, 13));
            let suffix = "";

            if (hours >= 12) {
                suffix = "PM";
                hours %= 12;
            }
            else {
                suffix = "AM";
                if (hours == 0) {
                    hours = 12;
                }
            }
            let time = hours.toString() + eventlist[i].start.dateTime.substring(13, 16) + " " + suffix;

            newEvents.push({
                "title": eventlist[i].summary,
                "month": months[parseInt(eventlist[i].start.dateTime.substring(5, 7)) - 1],
                "day": eventlist[i].start.dateTime.substring(8, 10),
                "time": time,
                "locale": eventlist[i].location,
                "desc": eventlist[i].description,
                "link": eventlist[i].htmlLink,
            });            
        }
// eventlist needs to parsed for the relevant information and then exported 
// Will update events on both the HOME and EVENT pages
// Also may need logic to only send the most recent three events
// This method draws on all events in the calendar

// Please put the link in the location, so it's easy to draw from!

// export default eventlist.items

export default newEvents

/*[
    //events are in order of date, months are typed as three letter abbreviations in all caps
    //JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC
    //multi-line strings should be encapuslated with the ` character, same key as the ~ (tilde)
    
    // {
    //     "title": "Welcome (Back) Mixer",
    //     "month": "AUG",
    //     "day": "31",
    //     "time": "7:00 pm",
    //     "locale": "Online (Zoom)",
    //     "desc": `We hope that through Our Welcome (Back) Mixer we can continue creating 
    //     a warm, inclusive atmosphere for everyone! Some cool things will take place during 
    //     this event, including a puzzle hunt, raffle prizes, and the Big-Little Family Reveal!`,
    //     "link": "https://www.facebook.com/events/1135676923499760/?__mref=mb",
    // },
    // {
    //     "title": "CS Club F.R.E.E. x Two Sigma",
    //     "month": "SEP",
    //     "day": "9",
    //     "time": "12:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Two Sigma is a systematic investment manager founded with the goal of applying 
    //     cutting edge technology to the data-rich world of finance. Join our interactive panel and 
    //     Q&A session to learn about Two Sigma's culture, mission, and tech, and where you fit into 
    //     the upcoming internship and career opportunities! `,
    //     "link": `https://fb.me/e/1zetzNBcP`,
    // },
    // {
    //     "title": "CS Club F.R.E.E. x HubSpot",
    //     "month": "SEP",
    //     "day": "9",
    //     "time": "7:00 pm",
    //     "locale": "Zoom",
    //     "desc": `HubSpot is a growth platform offering full stack software for marketing, sales, 
    //     and customer service. Join our interactive panel and Q&A session to learn about HubSpot's culture, 
    //     mission, and tech, and where you fit into the upcoming internship and career opportunities!`,
    //     "link": `https://www.facebook.com/events/1475529189304627/`,
    // },
    // {
    //     "title": "CS Clubs @ Rice Joint Event",
    //     "month": "SEP",
    //     "day": "10",
    //     "time": "7:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Come join CS Club, CSters, and DataSci Club on Thursday, September 10th, from 7-8 pm CST 
    //     and learn more Rice’s computational clubs! There will be a Q&A session in the end to answer any 
    //     questions students may have!`,
    //     "link": `https://fb.me/e/2RtUMeRka`,
    // },
    // {
    //     "title": "CS Club F.R.E.E. x Airbnb",
    //     "month": "SEP",
    //     "day": "16",
    //     "time": "5:00 pm",
    //     "locale": "Zoom",
    //     "desc": `The Airbnb team is kicking off a virtual event series with a casual chat with their 
    //     recent new grads. As Airbnb and the world has changed in the past few months, so have their experiences 
    //     and perspectives. During this session, you'll hear from their new grads about the amazing work they do to 
    //     pursue their ethos of belonging, how they're evolving in uncertain times, and anything else you'd like to 
    //     know!`,
    //     "link": `http://airbnbnewgrads2020.splashthat.com`,
    // },
    // {
    //     "title": "Hack Rice X",
    //     "month": "SEP",
    //     "day": "18",
    //     "time": "5:00 pm",
    //     "locale": "Remote",
    //     "desc": `Welcome to HackRice X! Come design, build, and code while meeting sponsors and peers 
    //     and having fun! Check out everything you need to know at hack.rice.edu! If you are a Rice 
    //     student, register at tinyurl.com/hackricex; non-Rice students may apply at hack.rice.edu!`,
    //     "link": `https://www.facebook.com/events/441468970107132/`,
    // },
    // {
    //     "title": "CS Club F.R.E.E. x Paycom",
    //     "month": "SEP",
    //     "day": "22",
    //     "time": "6:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Join us on Tuesday, September 22nd for our F.R.E.E x Paycom! This event will be in the 
    //     style of a Tech Talk, followed by breakout rooms to learn more about the work and opportunities 
    //     at Paycom from the recruiter and developers themselves! Can't wait to see you there!`,
    //     "link": `https://www.facebook.com/events/327019468631847`,
    // },
    // {
    //     "title": "Internship and Recruiting Workshop",
    //     "month": "SEP",
    //     "day": "27",
    //     "time": "7:00 pm",
    //     "locale": "Zoom",
    //     "desc": ` CS Club X CSters are hosting a BEGINNER'S GUIDE TO INTERNSHIPS/RESEARCH mostly targeted 
    //     to frosh/sophomores, but open to anybody! We'll talk about big frosh/soph internship programs 
    //     (Microsoft, Google, Facebook), a guide to doing research, startup life... and a guide to the 
    //     confusing but very worth game that is ~internships~ Show up to learn more about summer opportunities!`,
    //     "link": `https://fb.me/e/1LixleHtL`,
    // },
    // {
    //     "title": "CS Club F.R.E.E. x Doordash",
    //     "month": "SEP",
    //     "day": "28",
    //     "time": "12:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Hi everyone! We're partnering with DoorDash for another Fall Recruiting and Engagement Event! 
    //     Come out on Monday, Sept. 28 at 12:00 pm CST to learn about new grad and internship opportunities and 
    //     DoorDash's mission and culture!`,
    //     "link": `https://www.facebook.com/events/334366414466087`,
    // },
    // {
    //     "title": "CS Club F.R.E.E. x Leidos",
    //     "month": "OCT",
    //     "day": "5",
    //     "time": "12:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Leidos is an American Defense, Aviation, Information, Technology & Biomedical Research company. 
    //     Come out to our session with Leidos to learn about new grad and intern opportunities with an interactive 
    //     panel and Q&A featuring recruiters and engineers`,
    //     "link": `https://fb.me/e/1B8Q9Td6k`,
    // },
    // {
    //     "title": "CS Club and CSters F.R.E.E. x CDK Global",
    //     "month": "OCT",
    //     "day": "7",
    //     "time": "12:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Event info on the way!`,
    //     "link": `https://fb.me/e/1aNyQ9B7s`,
    // },
    // {
    //     "title": "CS Club and CSters F.R.E.E. x Gartner",
    //     "month": "OCT",
    //     "day": "7",
    //     "time": "6:00 pm",
    //     "locale": "Zoom",
    //     "desc": `Event info on the way!`,
    //     "link": `LINK NOT READY`,
    // },
    // {
    //     "title": "Facebook AR/VR Q&A",
    //     "month": "OCT",
    //     "day": "21",
    //     "time": "3:30 pm",
    //     "locale": "Zoom",
    //     "desc": `Are you interested in augmented or virtual reality or just want to learn more? Want to know what 
    //     the daily life of a Facebook employee is like? Do you think red is kinda sus? If so, come to our virtual 
    //     Q&A panel featuring engineers (and Rice alumns) working on Facebook's AR and VR teams on Wednesday, 
    //     Oct 21st, from 3:30-4:30 pm CST!`,
    //     "link": `https://fb.me/e/1MvBI4ip5`,
    // },
    // {
    //     "title": "CS Eats!",
    //     "month": "OCT",
    //     "day": "24",
    //     "time": "6:00 pm",
    //     "locale": "In person",
    //     "desc": `Want to eat a ~heavily discounted~ dinner with your CS Club Fam? OR want to meet new people 
    //     interested in CS while being with your friends and feasting on a ~tastefully cheapened~ meal? If yes, 
    //     sign up below! CS Eats will be on Saturday, October 24th, 7pm CDT! Freshmen can sign 
    //     up below, and upperclassmen can find the form in their Rice University Class Facebook groups. 
    //     ***Sign ups will close this Friday, October 16th at 11:59pm CDT so sign up quickly!!***`,
    //     "link": `https://docs.google.com/forms/d/e/1FAIpQLSeC2srm8VSvVM1zCgTl2KX1dKerJbPHzlBb8sPocumnpfALng/viewform`,
    // },
    {
        "title": "COMP 182 Panel",
        "month": "NOV",
        "day": "24",
        "time": "8:00 pm",
        "locale": "Zoom",
        "desc": `For those of you who are CS majors or are otherwise planning to take the infamous COMP 182 class, quell 
        all fears, rumors, and concerns by coming to the COMP 182 Panel! `,
        "link": `https://fb.me/e/3b9dUxME1`,
    },
    {
        "title": "Academic Planning with CS Club!",
        "month": "NOV",
        "day": "30",
        "time": "2:00 PM",
        "locale": "Zoom",
        "desc": `Do you have questions about scheduling and picking classes as a COMP major? Confused about what to do 
        with your 4-year plan? Stop by to ask questions to PAAs and COMP upperclassmen!`,
        "link": `https://fb.me/e/cfCtmyex9`,
    },
    {
        "title": "Final CS Office Hours",
        "month": "DEC",
        "day": "3",
        "time": "7:00 PM",
        "locale": "Zoom",
        "desc": `Come join us for the FINAL HUGE office hours for all CS students. We'll be having TA's from 140, 215, 310, 
        382! Who wouldn't want to show up??`,
        "link": `https://fb.me/e/203IbcTGS`,
    },

    
] */

