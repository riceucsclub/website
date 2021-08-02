import React, { useState } from 'react'
import csclublogo from '../Files/logos/csclub_dark.png';
//import { Tab } from "../Components/Tab"
import gray_gradient from '../Files/gradient1.svg'
// import gray_gradient from '../Files/header_gray.svg'

//mobile svgs
import MobileHamburger from '../Files/mobilehamburger.svg'
import ChevronDown from '../Files/chevron-down.svg'
import ChevronUp from '../Files/chevron-up.svg'
import {
    NavLink
  } from 'react-router-dom';



function Header (props){
    //state for handling closing the subsidiaries down_down on click of another nav link
    const [open, setOpen] = useState(false);
    //state for mobile nav menu
    const [navOpen, setNavOpen] = useState(false);


    //DESKTOP NAV HERE. MOBILE IS BELOW IT.
    //drop down is a component of nav_bar
    const drop_down = 
                    <div className="absolute z-20 mt-2 ml-2 bg-white w-1/5 rounded-lg shadow-md">
                        <a href="http://remixcs.rice.edu/" target="_blank" className="block px-4 py-2 border-b text-gray-500b hover:font-bold">Remix CS</a>
                        <a href="https://hack.rice.edu/" target="_blank" className="block px-4 py-2 border-b text-gray-500b hover:font-bold">HackRice</a>
                        <a href="http://riceapps.org/" target="_blank" className="block px-4 py-2 border-b text-gray-500b hover:font-bold">Rice Apps</a>
                        <NavLink exact to="/csio" target="_blank" className="block px-4 py-2 text-gray-500b hover:font-bold">CS IO</NavLink>
                    </div>
    const nav_bar =
                    //quick fix for constrained main div = flex-wrap
                    <ul className="hidden md:flex relative z-20 mr-10">
                        <li>
                            <NavLink exact to="/about" className="text-gray-500b py-2 px-4 text-lg font-bold hover:text-light-blue-gray" activeClassName="text-light-blue-gray py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/resources" className="text-gray-500b py-2 px-4 text-lg font-bold hover:text-light-blue-gray" activeClassName="text-light-blue-gray py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>Resources</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/events" className="text-gray-500b py-2 px-4 text-lg font-bold hover:text-light-blue-gray" activeClassName="text-light-blue-gray py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>Events</NavLink>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500b px-4 text-lg font-bold hover:text-light-blue-gray" onClick={() => setOpen(!open)}>Subsidiaries</a>
                            {open && drop_down}
                        </li>
                        <li>
                            <NavLink exact to="/contact" className="text-gray-500b py-2 px-4 text-lg font-bold hover:text-light-blue-gray" activeClassName="text-light-blue-gray py-2 px-4 text-lg font-bold" onClick={() => setOpen(false)}>Contact</NavLink>
                        </li>

                    </ul>
    

    //MOBILE NAV

    //mobile_nav_popup and mobile-nav-dropdown are components of mobile_nav. mobile_nav is what is in the actual header.
    //it is composed of a wrapper, that of which contains two areas: a clickable
    //area that is transparent on the left of the navpopup that can be clicked to close the navbar, 
    //and the mobile nav section, which consists of the hamburger button and the accompanying menu div
    //that pops up whenever the button is clicked. 
    const mobile_nav_drop_down = 
                                <div className="relative z-20 mt-2 ml-4">
                                    <a href="http://remixcs.rice.edu/" target="_blank" className="block text-xl text-white ml-5">Remix CS</a>
                                    <a href="https://hack.rice.edu/" target="_blank" className="block text-xl text-white ml-5">HackRice</a>
                                    <a href="http://riceapps.org/" target="_blank" className="block text-xl text-white ml-5">Rice Apps</a>
                                    <NavLink exact to="/csio" target="_blank" className="block text-xl text-white ml-5">CS IO</NavLink>
                                </div>
    //this is the mobile sidebar. Note that in the mobile state, the subsidiaries anchor also has a switching up and down arrow svg.
    const mobile_nav_sidebar = 
                            <div id="mobile_nav_wrapper" className="absolute overflow-y-hidden h-full z-20 left-0 top-0 bottom-0 w-full">
                                <div id="close-nav-area" onClick={() => setNavOpen(!navOpen)} className="left-0 top-0 h-full w-full bg-opaque-white"></div>
                                <div className="flex flex-col justify-start items-start fixed top-0 right-0 z-20 h-screen bg-rice-blue w-max">
                                    <button type="button" onClick={() => setNavOpen(!navOpen)} className="relative text-red-500 ml-4 text-5xl font-bold self-end w-50px">
                                        × 
                                    </button>
                                    <ul className="flex flex-col relative z-20 mr-10">
                                        <li>
                                            <NavLink exact to="/about" className="text-white text-3xl font-bold hover:text-light-blue-gray ml-4" activeClassName="text-light-blue-gray" onClick={() => setOpen(false)}>About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to="/resources" className="text-white text-3xl font-bold hover:text-light-blue-gray ml-4" activeClassName="text-light-blue-gray" onClick={() => setOpen(false)}>Resources</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to="/events" className="text-white text-3xl font-bold hover:text-light-blue-gray ml-4" activeClassName="text-light-blue-gray" onClick={() => setOpen(false)}>Events</NavLink>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white text-3xl font-bold hover:text-light-blue-gray ml-4" onClick={() => setOpen(!open)}>
                                                Subsidiaries 
                                                { !open && <img src={ChevronDown} className="ml-2 inline-block fill-current text-white-100"/> } 
                                                { open && <img src={ChevronUp} className="ml-2 inline-block fill-current text-white-100"/> }  
                                            </a>
                                            {open && mobile_nav_drop_down}
                                        </li>
                                        <li>
                                            <NavLink exact to="/contact" className="text-white text-3xl font-bold hover:text-light-blue-gray ml-4" activeClassName="text-light-blue-gray" onClick={() => setOpen(false)}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    const mobile_nav = 
                            <div className="flex md:hidden">
                                <button type="button" onClick={() => setNavOpen(!navOpen)} id="hamburger-icon" className="md:hidden z-20 mr-5 h-40px w-40px sm:mr-10">
                                    <img 
                                        src={MobileHamburger} 
                                        alt="burger icon"
                                        className="md:hidden h-full w-full" 
                                    />
                                </button>
                                <div>
                                    {navOpen && mobile_nav_sidebar}
                                </div>
                            </div>



    return (
        <div className="flex justify-between items-center py-1 h-100px bg-white w-screen z-30">
            <div>
                <NavLink exact to="/"><img src={csclublogo} alt="Logo" className="justify-start relative mx-5 sm:mx-10 z-10 w-1/6 max-w-md min-w-60px"/></NavLink>
            </div>
            {/* <img className="absolute z-0 flex right-0 w-5/12" src={gray_gradient}/> */}
            {nav_bar}
            {mobile_nav}
        </div>
    )
}

export default Header