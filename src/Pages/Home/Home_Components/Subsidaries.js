import React from 'react'
import csclub_logo from '../../../Files/csclub_logo.png'


function Subsidaries () {

    return (
        <div className="px-12">
            <h1 className="text-4xl py-16 text-gray-500b font-bold">We work with...</h1>
            <div class="flex justify-around">
                <div class="inline-block w-1/10 text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo" onClick={() => window.open("http://remixcs.rice.edu/")}/>
                </div>
                <div class="inline-block text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo" onClick={() => window.open("https://hack.rice.edu/")}/> 
                </div> 
                <div class="inline-block text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo" onClick={() => window.open("http://riceapps.org/")}/>
                </div>
                <div class="inline-block text-gray-700 text-center">
                    <img src={csclub_logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Subsidaries