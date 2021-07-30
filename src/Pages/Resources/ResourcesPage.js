import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import Header from '../../Components/Header'
import blue_gradient from '../../Files/blue_gradient.svg'
import gray_gradient from '../../Files/gradient1.svg'
import triangles from '../../Files/Triangles.svg'
import FAQList from './Resources_Components/FAQList'
import Profile from './Resources_Components/Profile'
import Contacts from '../../Files/Contacts'

import boxText from '../../Files/boxText'



function ResourcesPage(props) {

  const [activeTag, setActiveTag] = useState("");
  const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
  let text = '';
  const head = "Helpful Words";
  let title1 = 'Resume Reviews';
  let body1 = 'Bring your resumes and get feedback and advice from upper classmen and an invited experienced professional who has extensive experience reviewing and evaluating resumes. We will discuss resume content and formatting tips and provide constructive criticism in an informal setting. A resume review session is usually held during the week before the university career expo.';
  let title2 = "Algorithm Challenge";
  let body2 = 'Got technical interviews lined up from all those companies you applied to? Algorithm challenge can help you with those interviews! In these sessions, we’ll go over many popular technical problems and how to analyze, solve, and present them. Excellent for those interested in some real technical interview practice. Algorithm challenges are usually held every other week.';



  let profilelist = []
    for(let i = 0; i < Contacts.length; i++){
        profilelist.push(
            <Profile 
                image = {Contacts[i]["image"]}
                name = {Contacts[i]["name"]}
                email = {Contacts[i]["email"]}
            />
        )
    }



    return (
      <div className="relative">
        <Header/>
        {/* <img class="opacity-0 md:opacity-100 object-left absolute mt-36" width="250px" height="250px" src={triangles}/> */}
        <div className="relative z-10 text-rice-blue text-center font-bold text-4xl lg:text-5xl laptop-l:text-6xl mt-10">{head}</div>
        <h1 className="flex text-gray-500b text-2xl md:text-3xl font-semibold justify-start px-1/6 mt-12">Career Help</h1>
        <p className="flex md:text-xl py-5 px-1/6 justify-end">CS Club provides career guidance to students by way of interview preparation sessions, resume review sessions, and course planning sessions (watch the mailing list for these events). We also give plain old peer-to-peer assistance—feel free to contact any of our officers with questions. We love to see people thrive in their computer science classes and get internships and job offers of their choice!</p>
        
        <div className="hidden md:flex px-1/6 md:px-32 xl:px-64 relative z-20 justify-around mt-16">
          <Box title={props.box["nameR"]} desc={props.box["blurbR"]}/>
          <Box title={props.box["nameP"]} desc={props.box["blurbP"]}/>
        </div>
        
        <div className="md:hidden flex relative flex-col justify-center items-center mx-1/6">
          <div class = "flex flex-col text-2xs md:text-base text-center items-center my-5 px-5 py-2 bg-white rounded-lg shadow-teal shadow">
            <h2 class = "text-xl font-semibold">{props.box["nameR"]}</h2>
            <p>{props.box["blurbR"]}</p>
          </div>
          <div class = "flex flex-col text-2xs md:text-base text-center items-center my-5 px-5 py-2 bg-white rounded-lg shadow-teal shadow">
            <h2 class = "text-xl font-semibold">{props.box["nameP"]}</h2>
            <p>{props.box["blurbP"]}</p>
          </div>
        </div>
  
        <div class = "relative z-10">
          <h1 className="flex text-gray-500b text-2xl md:text-3xl font-semibold justify-start mt-12 px-1/6">Advising</h1>
          <p className="flex md:text-xl px-1/6 py-5 justify-start">Have questions or just wondering what a CS degree looks like at Rice University? Check out some of our resources below!</p>
          <a href = 'https://ga.rice.edu/programs-study/departments-programs/engineering/computer-science/computer-science-bscs/#requirementstext' target = "_blank" className="flex text-xl underline mx-1/4 justify-start">Four year plan</a>
          <a href = 'https://docs.google.com/document/d/1UoLQ3Y96eI0LkeFMrxg8VYh3cP-19I_rMoGvPjvicg4/edit' target = "_blank" className="flex text-xl underline mx-1/4 justify-start">Study abroad resources</a>
          <a href = 'https://coda.io/d/Rice-Computer-Science-Guide_dEcPwl0JjQR/Welcome_su77n?fbclid=IwAR34seYUl1bLnserMIyVGfIZ45VKSDr_KTzBCoqxWSfQvD-PTqnM_nmm-l8#_lupFc' target = "_blank" className="flex text-xl underline mx-1/4 justify-start">Frequently asked questions</a>
          <p className="flex md:text-xl px-1/6 px-24 py-8 justify-start">Have a specific question? Reach out to one of our upperclassmen!</p>
          <div className="md:flex justify-center justify-around mb-8">{profilelist}</div>
        </div>
        <Footer/>
      </div>
    );
}



export default ResourcesPage;
