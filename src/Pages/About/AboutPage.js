import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import blue_gradient from '../../Files/blue_gradient.svg'
import gray_gradient from '../../Files/gradient1.svg'
import triangles from '../../Files/Triangles.svg'
import OfficerGallery from './About_Components/OfficerGallery'



function AboutPage() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  const head = "Welcome to the Rice CS Club!";
  
  return (
    <div className="relative">
      {/* <img class = "absolute mt-36 bg-no-repeat bg-left z-10" src={triangles} width="250px" height="250px"/> */}
      <div className="flex text-gray-500b text-5xl font-semibold justify-center">{head}</div>
      <p className="flex underline justify-center" onclick="window.open('Constitution.pdf')">Download our constitution here</p>
      <h1 className="flex text-gray-500b underline text-2xl mt-8 font-semibold justify-start ml-32">2020-2021 Officers</h1>
      <div class = "relative mb-8 z-10">
        <OfficerGallery/>
      </div>
      
    </div>
  );
}

export default AboutPage;
