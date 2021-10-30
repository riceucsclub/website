import React, { useState } from "react";
import tan_rect from "../../Files/tan_rect.svg";
import luay from "../../Files/luay.svg";
import profile_pic from "../../Files/empty_profile.png";
import Top_Part from "./CSIO_Components/Top_Part";

import { NavLink } from "react-router-dom";

const CSIO_Page = () => {
  let maintext =
    "The CS I/O committee is a small group of undergraduate students involved in computer science with various backgrounds that work to maintain an open line of communication between the Rice student body and the Computer Science Department. Our goal is to create a direct, accessible, and constructive conduit for Rice students to voice their opinions and ideas about Rice Computer Science and for the Computer Science Department to consult initiatives with the student body. As we work with the Computer Science Department, we aim to be both problem and solution-focused (i.e. not a collective rant space for students to target specific professors). In addition to voicing student opinion, we also highlight specific things students think the department does well and continue working with the Department to maintain successful initiatives.";
  let secondtext =
    "Some events we host are Ask Luay Anything, Research Panel, and Faculty Feud.";
  let thirdtext =
    "If you have suggestions, please reach out to one of our committee members via their email address listed on this page, or fill out the Google form using the link below.";
  let link_gf = "https://forms.gle/b4mk1Zp4PqkGe2Tx8";

  return (
    <div className="bg-black">
      <Top_Part />

      <div className="relative z-10 bg-black">
        <div className="relative z-10 text-4xl bg-white font-bold">
          <div className="text-4xl ml-24 py-4 bg-white font-bold">
            Our Mission
          </div>
        </div>

        <div className="relative z-20 bg-black">
          <div className="flex justify-center text-center bg-black mx-24 mt-24 text-white">
            {maintext}
          </div>
          <div className="flex justify-center text-center mx-24 mt-8 bg-black text-white">
            {secondtext}
          </div>
          <div className="flex justify-center text-center mx-24 mt-8 bg-black text-white">
            {thirdtext}
          </div>
          <a
            className="flex justify-center text-center mx-24 mt-2 bg-black text-white"
            href="https://forms.gle/b4mk1Zp4PqkGe2Tx8"
            target="_blank"
          >
            {link_gf}
          </a>
          {/* <div className="flex justify-center text-center mx-24 mt-2 bg-black text-white" onClick={()=> window.open("https://forms.gle/b4mk1Zp4PqkGe2Tx8")}>{link_gf}</div> */}
        </div>

        <div className="relative z-10 text-4xl mt-24 bg-white font-bold">
          <div className="text-4xl py-4 ml-24 bg-white font-bold">
            Meet the team
          </div>
        </div>

        <div className="relative z-10 flex justify-center text-2xl py-6 text-white">
          Coming Soon!
        </div>
      </div>

      {/* <div className="flex mt-8 grid justify-center grid-cols-2">
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={luay}/>
                  <h1 className="text-center text-white text-xl">Dr. Luay Nakhleh</h1>
                  <h1 className="text-center text-white text-xl">Department Chair</h1>
              </div>
              </div>
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">name</h1>
                  <h1 className="text-center text-white text-xl">title</h1>
              </div>
              </div>
          </div> */}

      {/* <div className="flex mt-8 grid justify-center grid-cols-6">
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">Dr. Luay Nakhleh</h1>
                  <h1 className="text-center text-white text-xl">Department Chair</h1>
              </div>
              </div>
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">name</h1>
                  <h1 className="text-center text-white text-xl">title</h1>
              </div>
              </div>
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">name</h1>
                  <h1 className="text-center text-white text-xl">title</h1>
              </div>
              </div>
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">name</h1>
                  <h1 className="text-center text-white text-xl">title</h1>
              </div>
              </div>
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">name</h1>
                  <h1 className="text-center text-white text-xl">title</h1>
              </div>
              </div>
              <div className="flex w-2/3 flex-wrap center justify-center">
              <div className="px-4 justify-center align-middle">
                  <img className="flex items-center py-3 justify-center max-w-full h-auto border-none" src={profile_pic}/>
                  <h1 className="text-center text-white text-xl">name</h1>
                  <h1 className="text-center text-white text-xl">title</h1>
              </div>
              </div>
          </div> */}

      <footer className="text-center py-4 text-white">&copy; CS IO 2020</footer>
    </div>
  );
};

export default CSIO_Page;
