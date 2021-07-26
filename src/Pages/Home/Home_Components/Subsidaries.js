import React from 'react'

// import csclub_logo from '../../../Files/logos/csclub_dark.png'
import hackrice_logo from '../../../Files/logos/HackRice_dark.svg'
import remixcs_logo from '../../../Files/logos/remixcs3.png'
import riceapps_logo from '../../../Files/logos/riceapps.png'
import csio_logo from '../../../Files/logos/csio.png'

import {
    NavLink
  } from 'react-router-dom';

function Subsidaries () {

    return (
        <div className="">
            <h1 className="text-3xl md:text-4xl py-12 md:px-24 text-center md:text-left text-gray-500b font-semibold">We work with...</h1>
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="flex mx-8 my-4 text-gray-700 text-center">
                    <a href="http://remixcs.rice.edu/" target="_blank">
                        <img src={remixcs_logo} alt="Logo" width="200px"/>
                    </a>
                </div>
                <div class="flex mx-8 my-4 text-gray-700 text-center">
                    <a href="https://hack.rice.edu/" target="_blank">
                        <img src={hackrice_logo} alt="Logo" width="200px"/>
                    </a>
                </div>
                <div class="flex mx-8 my-4 text-gray-700 text-center">
                    <a href="http://riceapps.org/" target="_blank">
                        <img src={riceapps_logo} alt="Logo" width="200px"/>
                    </a>
                </div>
                <NavLink exact to="/csio" target="_blank" class="flex mx-8 my-4">
                    <img src={csio_logo} alt="Logo" width="200px"/>
                </NavLink>
            </div>
        </div>
    )
}

export default Subsidaries