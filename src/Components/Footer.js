import React from 'react'
import instalogo from '../Files/insta_logo.svg';
import slacklogo from '../Files/slack_logo.svg';
import facebooklogo from '../Files/fb_logo.png';
import maillogo from '../Files/mail_logo.svg';
import discordlogo from '../Files/discord_logo.svg';
import blue_gradient from '../Files/blue_gradient.svg'
import side from '../Files/side_gradient.svg'
import csclublogohorizontal from '../Files/logos/csclub_horizontal.png';

import {
    NavLink
  } from 'react-router-dom';

function Footer (){
    return (
        <div class = "relative">
        {/* <img class = "absolute hidden md:flex bottom-0 z-0" src={blue_gradient}/>  */}
        <footer class="flex flex-col justify-center items-center relative z-10 bg-rice-blue text-center text-s text-gray-700 py-2 w-full">
            <div>
                <a href="#"><img src={csclublogohorizontal} alt="Logo" className="w-72 md:w-108 my-10"/></a>
            </div>
            <div class="flex justify-center bg-transparent">
                <div class="inline-block text-gray-700 text-center bg-transparent">
                    <a href='https://www.instagram.com/ricecsclub/?hl=en' target="_blank">
                        <img src={instalogo} alt="Logo"/>
                    </a>
                </div>
                <div class="inline-block text-gray-700 text-center bg-transparent px-1 m-1">
                    <a href='https://www.facebook.com/ricecsclub' target="_blank">
                        <img src={facebooklogo} alt="Logo" width="33px" height="33px"/>
                    </a>
                </div> 
                <div class="inline-block text-gray-700 text-center bg-transparent m-2">
                    <a href='https://ricecs.slack.com/signup' target="_blank">
                        <img src={slacklogo} alt="Logo"/>
                    </a>
                </div>
                <div class="inline-block text-gray-700 text-center bg-transparent m-2">
                    <NavLink exact to="/about"><img src={maillogo} alt="Logo" width="37px" height="35px"/></NavLink>
                </div>
                <div class="inline-block text-gray-700 text-center bg-transparent ml-2">
                    <a href='https://discord.gg/AjHeNH2' target="_blank">
                        <img src={discordlogo} alt="Logo" width="50px" height="50px"/>
                    </a>
                </div>
            </div>
            
            &copy; Rice University CS Club 2021
        </footer>

        </div>
    )
}

export default Footer