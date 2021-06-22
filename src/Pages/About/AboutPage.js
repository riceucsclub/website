import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
// import blue_gradient from '../../Files/blue_gradient.svg'
// import gray_gradient from '../../Files/gradient1.svg'
// import triangles from '../../Files/Triangles.svg'
import OfficerGallery from './About_Components/OfficerGallery'



function AboutPage() {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  const head = "Welcome to the Rice CS Club!";

  //{/* <img class = "absolute mt-36 bg-no-repeat bg-left z-10" src={triangles} width="250px" height="250px"/> */}
  return (

    <div className="relative">
      <Header/>

      <div className="relative z-10 flex text-gray-500b text-3xl lg:text-5xl font-semibold justify-center">{head}</div>
      <a className="flex underline justify-center" href= 'https://docs.google.com/document/d/1EEig4JVePLBKu0MTp7aa5qNrWEQGOorgcm3M4XtXUew/edit' target="_blank">
        View our constitution here
      </a>
      <a className="flex underline justify-center pt-1" href= 'http://eepurl.com/gBMAdr' target="_blank">
        Join our mailing list here
      </a>
      <h1 className="flex text-gray-500b justify-center underline text-2xl mt-8 font-semibold justify-start">2020-2021 Officers</h1>
      <div class = "relative mb-8 z-10 justify-center">
        <OfficerGallery/>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
