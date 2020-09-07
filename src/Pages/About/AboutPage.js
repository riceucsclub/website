import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import blue_gradient from '../../Files/blue_gradient.svg'
import gray_gradient from '../../Files/gradient1.svg'
import triangles from '../../Files/Triangles.svg'
import OfficerGallery from './About_Components/OfficerGallery'



function AboutPage() {
  const head = "Welcome to the Rice CS Club!";
  
  return (
    <div className="relative">
      <Header/>
      <div className="flex text-gray-500 text-5xl font-semibold justify-center">{head}</div>
      <a className="flex underline justify-center" href= 'https://docs.google.com/document/d/1EEig4JVePLBKu0MTp7aa5qNrWEQGOorgcm3M4XtXUew/edit' target="_blank">View our constitution here</a>
      <h1 className="flex text-gray-500 underline text-2xl mt-8 font-semibold justify-start ml-32">2020-2021 Officers</h1>
      <OfficerGallery/>
      <img class="absolute object-left" width="150px" height="150px" src={triangles}/>
      <div> 
      <img src={blue_gradient}/> 
      </div>     
      <Footer/>
    </div>
  );
}

export default AboutPage;
