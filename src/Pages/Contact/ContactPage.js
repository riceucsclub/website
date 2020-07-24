import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import Header from '../../Components/Header'
import blue_gradient from '../../Files/blue_gradient.svg'
import gray_gradient from '../../Files/gradient1.svg'
import triangles from '../../Files/Triangles.svg'
import boxText from '../../Files/boxText.js'



function ContactPage() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  const head = "We love hearing from you!";
  let title1 = 'Tech Talks';
  let body1 = 'Tech Talks are a great way to get Rice students interested in what your company does and get in contact with potential interns and employees. If you are interested in hosting one of these, please email our current President Luis Clague. Please be ready to provide a preferred date, time, and duration.'
  let title2 = "Sponsorship";
  let body2 = 'Putting together HackRice every year is expensive, so we really appreciate all of our sponsors. If you’d like to support HackRice and other club activities financially, we have a variety of sponsorship packages available. Please contact our current HackRice Chair Anthony Cho for more information.';

  return (
    <div className="relative">
      <div className="flex text-gray-500 text-5xl font-semibold justify-center">{head}</div>
      <p className="flex justify-center">If you need to contact club leadership, email us here.</p>
      <p className="flex justify-center">Stay up to date on the latest events and activities by subscribing to our mailing list.</p>
      <div className="flex text-gray-500 text-3xl font-semibold justify-center py-4">Looking to get involved from outside of Rice?</div>
      <p className="flex justify-center">Check out these opportunities!</p>
      <img class="object-left" width="150px" height="150px" src={triangles}/>
      <div className="flex justify-around py-5">
        <Box title={title1} body={body1}/>
        <Box title={title2} body={body2}/>
      </div>
      <div> 
      <img src={blue_gradient} height="80px" width="1400px"/> 
      </div>     
      <Footer/>
    </div>
  );
}

export default ContactPage;
