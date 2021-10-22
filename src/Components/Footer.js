import React from 'react'
import instalogo from '../Files/instagram-logo-white-128px.png';
import slacklogo from '../Files/slack-logo-white-128px.png';
import facebooklogo from '../Files/facebook-logo-white-128px.png';
import maillogo from '../Files/email-logo-white-128px.png';
import discordlogo from '../Files/discord-logo-white-128px.png';
import blue_gradient from '../Files/blue_gradient.svg'
import side from '../Files/side_gradient.svg'
import csclublogohorizontal from '../Files/logos/csclub_horizontal.png';

import {
    NavLink
  } from 'react-router-dom';

function Footer (){
    return (
        <div class = "relative">
        <footer class="flex flex-col justify-center items-center relative z-10 bg-rice-blue text-center text-s text-light-blue-gray py-2 w-full">
            <div>
                <a href="#"><img src={csclublogohorizontal} alt="Logo" className="w-72 md:w-108 my-10"/></a>
            </div>
            <div class="flex justify-center items-center bg-transparent">
                <div class="inline-block text-light-blue-gray text-center bg-transparent p-2">
                    <a href='https://www.instagram.com/ricecsclub/?hl=en' target="_blank">
                        <img src={instalogo} alt="Instagram" class="w-40px"/>
                    </a>
                </div>
                <div class="inline-block text-light-blue-gray text-center bg-transparent p-2">
                    <a href='https://www.facebook.com/ricecsclub' target="_blank">
                        <img src={facebooklogo} alt="Facebook" class="w-40px"/>
                    </a>
                </div> 
                <div class="inline-block text-light-blue-gray text-center bg-transparent p-2">
                    <a href='https://ricecs.slack.com/signup' target="_blank">
                        <img src={slacklogo} alt="Slack" class="w-40px"/>
                    </a>
                </div>
                <div class="inline-block text-light-blue-gray text-center bg-transparent p-2">
                    <NavLink exact to="/about"><img src={maillogo} alt="Email" class="w-40px"/></NavLink>
                </div>
                <div class="inline-block text-light-blue-gray text-center bg-transparent p-2">
                    <a href='https://discord.gg/AjHeNH2' target="_blank">
                        <img src={discordlogo} alt="Discord" class="w-40px"/>
                    </a>
                </div>
            </div>
            
            &copy; Rice University CS Club 2021
        </footer>

        </div>
    )
}

export default Footer