import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import boxText from '../../Files/boxText'

import triangles from '../../Files/Triangles.svg'

import {
    NavLink
  } from 'react-router-dom';

function ContactPage(props){

    console.log(props, 'prop');

    const [activeTag, setActiveTag] = useState("");
    const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
    let text = '';

    var link_mail = <a href = "mailto:riceucsclub@gmail.com"> iceucsclub@gmail.com</a>;
    var link_mailing_list =
        <ul>
            <li>
                <NavLink exact to="/about"> ailing list</NavLink>
            </li>
        </ul>

    return(
        <div class = "relative z-0">
            <Header/>
            <img class = "opacity-0 md:opacity-100 absolute z-10 mt-36 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/>

            <div class = 'relative text-center z-10'>
                <div class = 'text-5xl font-semibold'>
                    We love hearing from you!
                </div>
                <div class = 'text-xl mt-3 text-light'>
                <div className="flex justify-center">
                    If you need to contact club leadership, email us at r{link_mail}.
                </div>
                <p className="flex justify-center">
                    Stay up to date on the latest events and activities by subscribing to our m{link_mailing_list}.
                </p>
                </div>
                <div class = 'text-2xl font-medium mt-16'>
                    Looking to get involved from outside of Rice?
                </div>
                <div class = 'text-xl text-light'>
                    Check out these opportunities!
                </div>
            </div>

            <div class = 'md:px-32 relative flex justify-around z-40 xl:px-64 mt-20 mb-40'>
                <Box title = {boxText["nameT"]} desc = {boxText["blurbT"]}/>
                <Box title = {props.box["nameS"]} desc = {props.box["blurbS"]}/>
            </div>
            <Footer/>
        </div>
    )
}
export default ContactPage