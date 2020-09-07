import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Box from '../../Components/Box';
import Header from '../../Components/Header';
import blue_gradient from '../../Files/blue_gradient.svg';
import gray_gradient from '../../Files/gradient1.svg';
import triangles from '../../Files/Triangles.svg';
import boxText from '../../Files/boxText.js';
import {
  NavLink
} from 'react-router-dom';



function ContactPage() {

 
  const head = "We love hearing from you!";
  let title1 = 'Tech Talks';
  let body1 = 'Tech Talks are a great way to get Rice students interested in what your company does and get in contact with potential interns and employees. If you are interested in hosting one of these, please email our current President Luis Clague. Please be ready to provide a preferred date, time, and duration.'
  let title2 = "Sponsorship";
  let body2 = 'Putting together HackRice every year is expensive, so we really appreciate all of our sponsors. If you’d like to support HackRice and other club activities financially, we have a variety of sponsorship packages available. Please contact our current HackRice Chair Anthony Cho for more information.';
  var link_mail = <a href = "mailto:riceucsclub@gmail.com"> iceucsclub@gmail.com</a>;
  var link_mailing_list = <ul>
                              <li>
                                  <NavLink exact to="/about"> ailing list</NavLink>
                              </li>
                          </ul>

  return (
    <div className="relative">
      <Header/>
      <div className="flex text-gray-500 text-5xl font-semibold justify-center">{head}</div>
      <div className="flex justify-center">If you need to contact club leadership, email us at r{link_mail}.</div>
      <p className="flex justify-center">Stay up to date on the latest events and activities by subscribing to our m{link_mailing_list}.</p>
      <div className="flex text-gray-500 text-3xl mt-12 font-semibold justify-center py-4">Looking to get involved from outside of Rice?</div>
      <p className="flex justify-center">Check out these opportunities!</p>
      <img class="absolute object-left" width="150px" height="150px" src={triangles}/>
      <div className="flex justify-around py-5">
        <Box title={title1} body={body1}/>
        <Box title={title2} body={body2}/>
      </div>
      <div> 
      <img className="z-0" src={blue_gradient}/> 
      </div>     
      <Footer className="z-10"/>
    </div>
  );
}

export default ContactPage;
