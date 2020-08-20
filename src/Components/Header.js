import React, { useState } from 'react'
import csclublogo from '../Files/csclub_logo.png';
import gray_gradient from '../Files/gradient1.svg'
import {
    NavLink
  } from 'react-router-dom';
//import onClickOutside from 'react-onclickoutside';


function Header (){

    const [open, setOpen] = useState(false);
    const drop_down = 
                    <div className="absolute z-10 mt-2 ml-2 bg-white w-1/12 rounded-lg shadow-md">
                        <a href="http://remixcs.rice.edu/" target="_blank" className="block px-4 py-2 border-b text-gray-500 hover:font-bold" onClick={() => setOpen(false)}>Remix CS</a>
                        <a href="https://hack.rice.edu/" target="_blank" className="block px-4 py-2 border-b text-gray-500 hover:font-bold" onClick={() => setOpen(false)}>HackRice</a>
                        <a href="http://riceapps.org/" target="_blank" className="block px-4 py-2 border-b text-gray-500 hover:font-bold" onClick={() => setOpen(false)}>Rice Apps</a>
                        <NavLink exact to="/csio" target="_blank" className="block px-4 py-2 text-gray-500 hover:font-bold" onClick={() => setOpen(false)}>CS IO</NavLink>
                    </div>
    const nav_bar =
                    <ul className="flex mr-10">
                        <li>
                            <NavLink exact to="/about" className="main-nav" activeClassName="main-nav-active" onClick={() => setOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/resources" className="main-nav" activeClassName="main-nav-active" onClick={() => setOpen(false)}>Resources</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/events" className="main-nav" activeClassName="main-nav-active" onClick={() => setOpen(false)}>Events</NavLink>
                        </li>
                        <li>
                            <h1 className="text-gray-500 px-4 text-lg font-bold" onClick={() => setOpen(!open)}>Subsidiaries</h1>
                            {open && drop_down}
                        </li>
                        <li>
                            <NavLink exact to="/contact" className="main-nav" activeClassName="main-nav-active" onClick={() => setOpen(false)}>Contact</NavLink>
                        </li>

                    </ul>
   



    return (
       <header>
           <div className="flex justify-between items-center py-1">
                <div>
                    <NavLink exact to="/"><img src={csclublogo} alt="Logo" width="120px" height="120px" className="justify-start px-3 relative z-10 py-6"/></NavLink>
                </div>
                {/* <img className="absolute z-0 flex right-0 w-2/5" src={gray_gradient}/> */}
                    <ul className="flex mr-10">
                        {nav_bar}
                    </ul>
           </div>
       </header> 
    )
}

export default Header