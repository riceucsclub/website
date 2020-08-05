import React from 'react'
import csclub_logo from '../../../Files/csclub_logo.png'


function Subsidaries () {

    return (
        <div className="px-12">
            <h1 className="text-4xl py-16 text-gray-500 font-bold">We work with...</h1>
            <div class="flex justify-around">
                <div class="inline-block w-1/10 text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo" onClick={() => window.open('https://www.instagram.com/ricecsclub/?hl=en')}/>
                </div>
                <div class="inline-block text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo" onClick={() => window.open('https://www.facebook.com/ricecsclub')}/> 
                </div> 
                <div class="inline-block text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo" onClick={() => window.open('https://ricecs.slack.com/signup')}/>
                </div>
                <div class="inline-block text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Subsidaries