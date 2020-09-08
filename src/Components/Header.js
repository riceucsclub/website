import React, { useState } from 'react'
import csclublogo from '../Files/logos/csclub_dark.png';
//import { Tab } from "../Components/Tab"
import gray_gradient from '../Files/gradient1.svg'
// import gray_gradient from '../Files/header_gray.svg'
import {
    NavLink
  } from 'react-router-dom';



function Header (props){

    

    const [open, setOpen] = useState(false);
    const drop_down = 
                    <div className="absolute z-20 mt-2 ml-2 bg-white w-1/5 rounded-lg shadow-md">
                        <a href="http://remixcs.rice.edu/" target="_blank" className="block px-4 py-2 border-b text-gray-500b hover:font-bold">Remix CS</a>
                        <a href="https://hack.rice.edu/" target="_blank" className="block px-4 py-2 border-b text-gray-500b hover:font-bold">HackRice</a>
                        <a href="http://riceapps.org/" target="_blank" className="block px-4 py-2 border-b text-gray-500b hover:font-bold">Rice Apps</a>
                        <NavLink exact to="/csio" target="_blank" className="block px-4 py-2 text-gray-500b hover:font-bold">CS IO</NavLink>
                    </div>
    const nav_bar =
                    <ul className="flex mr-3">
                        <li>
                            <NavLink exact to="/about" className="text-gray-500b py-2 px-4 text-lg font-bold" activeClassName="text-blue-400b py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/resources" className="text-gray-500b py-2 px-4 text-lg font-bold" activeClassName="text-blue-400b py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>Resources</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/events" className="text-gray-500b py-2 px-4 text-lg font-bold" activeClassName="text-blue-400b py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>Events</NavLink>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500b px-4 text-lg font-bold" onClick={() => setOpen(!open)}>Subsidiaries</a>
                            {open && drop_down}
                        </li>
                        <li>
                            <NavLink exact to="/contact" className="text-gray-500b py-2 px-4 text-lg font-bold" activeClassName="text-blue-400b py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>Contact</NavLink>
                        </li>

                    </ul>


    return (
       <header>
           <div className="flex justify-between items-center py-1">
                <div>
                    <NavLink exact to="/"><img src={csclublogo} alt="Logo" className="justify-start px-6 relative z-10 py-6 w-1/5"/></NavLink>
                </div>
                <img className="absolute z-0 flex right-0 w-19/50" src={gray_gradient}/>
                <ul className="relative z-20 flex mr-10">
                    {nav_bar}
                </ul>
           </div>
       </header> 
    )
}

export default Header