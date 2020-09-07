import React from 'react'
import instalogo from '../Files/insta_logo.svg';
import slacklogo from '../Files/slack_logo.svg';
import facebooklogo from '../Files/fb_logo.png';
import maillogo from '../Files/mail_logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';

// 
function Footer (){
    return (
        <footer class="z-10 bg-gray-200 text-center text-s text-gray-700 p-2 bottom-0 w-full">
            <div class="flex justify-center bg-gray-200">
                <div class="inline-block text-gray-700 text-center bg-gray-200">
                    <a href='https://www.instagram.com/ricecsclub/?hl=en' target="_blank"><img src={instalogo} alt="Logo"/></a>
                </div>
                <div class="inline-block text-gray-700 text-center bg-gray-200 px-1 m-1">
                    <a href='https://www.facebook.com/ricecsclub' target="_blank"><img src={facebooklogo} alt="Logo" width="33px" height="33px"/></a>
                </div> 
                <div class="inline-block text-gray-700 text-center bg-gray-200 m-2">
                <a href='https://ricecs.slack.com/signup' target="_blank"><img src={slacklogo} alt="Logo"/></a>
                </div>
                <div class="inline-block text-gray-700 text-center bg-gray-200 m-2">
                    <NavLink exact to="/about"><img src={maillogo} alt="Logo" width="37px" height="35px"/></NavLink>
                </div>
            </div>
            
            &copy; Rice University CS Club 2020
        </footer>
    )
}

export default Footer