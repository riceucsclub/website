import React from 'react'
import instalogo from '../Files/insta_logo.svg';
import slacklogo from '../Files/slack_logo.svg';
import facebooklogo from '../Files/fb_logo.png';
import maillogo from '../Files/mail_logo.svg';

// 
function Footer (){
    return (
        <footer class="z-10 bg-gray-200 text-center text-s text-gray-700 p-2 bottom-0 w-full">
            <div class="flex justify-center bg-gray-200">
                <div class="inline-block text-gray-700 text-center bg-gray-200">
                    <img src={instalogo} alt="Logo" onClick={() => window.open('https://www.instagram.com/ricecsclub/?hl=en')}/>
                </div>
                <div class="inline-block text-gray-700 text-center bg-gray-200 px-1 m-1">
                    <img src={facebooklogo} alt="Logo" width="33px" height="33px" onClick={() => window.open('https://www.facebook.com/ricecsclub')}/> 
                </div> 
                <div class="inline-block text-gray-700 text-center bg-gray-200 m-2">
                    <img src={slacklogo} alt="Logo" onClick={() => window.open('https://ricecs.slack.com/signup')}/>
                </div>
                <div class="inline-block text-gray-700 text-center bg-gray-200 m-2">
                    <img src={maillogo} alt="Logo" width="37px" height="35px"/>
                </div>
            </div>
            
            &copy; Rice University CS Club 2020
        </footer>
    )
}

export default Footer