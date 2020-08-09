import React, { useState } from 'react';
import tan_rect from '../../Files/tan_rect.svg';
import {
  NavLink
} from 'react-router-dom';

function CSIO_Page() {
    let maintext= "The CS I/O committee is a small group of undergraduate students involved in computer science with various backgrounds that work to maintain an open line of communication between the Rice student body and the Computer Science Department. Our goal is to create a direct, accessible, and constructive conduit for Rice students to voice their opinions and ideas about Rice Computer Science and for the Computer Science Department to consult initiatives with the student body. As we work with the Computer Science Department, we aim to be both problem and solution-focused (i.e. not a collective rant space for students to target specific professors). In addition to voicing student opinion, we also highlight specific things students think the department does well and continue working with the Department to maintain successful initiatives.";
    let secondtext= "Some events we host are Ask Luay Anything, Research Panel, and Faculty Feud.";
    let thirdtext= "If you have suggestions, please reach out to one of our committee members via their email address listed on this page.";
    
    return (
      <div className="relative bg-black">
          <div className="grid grid-rows-3">
            <div className="flex text-white font-bold justify-center text-6xl"></div>
            <div className="flex font-bold justify-center text-white text-center mx-64 text-6xl">We help students have their voices* heard.</div>
            <div className="flex font-bold text-white justify-center text-6xl"></div>
          </div>
          <div className="text-4xl mt-24 bg-white font-bold">
            <div className="text-4xl ml-24 py-4 bg-white font-bold">Our Mission</div>
          </div>
          <div className="bg-black">
          <div className="flex justify-center text-center bg-black mx-24 mt-8 text-white">{maintext}</div>
          <div className="flex justify-center text-center mx-24 mt-8 bg-black text-white">{secondtext}</div>
          <div className="flex justify-center text-center mx-24 mt-8 bg-black text-white">{thirdtext}</div>
          </div>
          <div className="text-4xl mt-24 bg-white font-bold">
            <div className="text-4xl py-4 ml-24 bg-white font-bold">Meet the team</div>
          </div>

      </div>
    );
  }
  
  export default CSIO_Page;