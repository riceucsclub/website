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
        <div className="px-12">
            <h1 className="text-4xl py-16 text-gray-500b font-bold">We work with...</h1>
            <div class="mt-8 grid col-gap-40 grid-cols-10 ">
                <div class="inline-block col-start-2 col-span-2 text-gray-700 text-center">
                    <a href="http://remixcs.rice.edu/" target="_blank">
                        <img src={remixcs_logo} alt="Logo" />
                    </a>
                </div>
                <div class="inline-block col-span-2 text-gray-700 text-center">
                    <a href="https://hack.rice.edu/" target="_blank">
                        <img src={hackrice_logo} alt="Logo" />
                    </a>
                </div>
                <div class="inline-block col-span-2 text-gray-700 text-center">
                    <a href="http://riceapps.org/" target="_blank">
                        <img src={riceapps_logo} alt="Logo" />
                    </a>
                </div>
                <NavLink exact to="/csio" target="_blank" class="inline-block col-span-2">
                    <img src={csio_logo} alt="Logo"/>
                </NavLink>
            </div>
        </div>
    )
}

export default Subsidaries