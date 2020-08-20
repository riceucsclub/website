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
import {
  NavLink
} from 'react-router-dom';



function ResourcesPage() {

  const head = "Helpful Words";
  let title1 = 'Resume Reviews';
  let body1 = 'Bring your resumes and get feedback and advice from upper classmen and an invited experienced professional who has extensive experience reviewing and evaluating resumes. We will discuss resume content and formatting tips and provide constructive criticism in an informal setting. A resume review session is usually held during the week before the university career expo.';
  let title2 = "Algorithm Challenge";
  let body2 = 'Got technical interviews lined up from all those companies you applied to? Algorithm challenge can help you with those interviews! In these sessions, we’ll go over many popular technical problems and how to analyze, solve, and present them. Excellent for those interested in some real technical interview practice. Algorithm challenges are usually held every other week.';

  var link_mailing_list = <ul>
                              <li>
                                  <NavLink exact to="/about"> mailing list</NavLink>
                              </li>
                          </ul>

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
      <div className="flex text-gray-500 text-5xl font-bold justify-center">{head}</div>
      <h1 className="flex text-gray-500 underline text-2xl font-semibold justify-start ml-32">Career Help</h1>
      <p className="flex mx-32 py-5 justify-center">CS Club provides career guidance to students by way of interview preparation sessions, resume review sessions, and course planning sessions (watch the mailing list for these events). We also give plain old peer-to-peer assistance—feel free to contact any of our officers with questions. We love to see people thrive in their computer science classes and get internships and job offers of their choice!</p>
      <img class="object-left absolute" width="170px" height="250px" src={triangles}/>
      <div className="flex justify-around mx-10 py-5">
        <Box title={title1} body={body1}/>
        <Box title={title2} body={body2}/>
      </div>
      <h1 className="flex text-gray-500 underline text-2xl font-semibold justify-start mt-12 ml-32">Advising</h1>
      <p className="flex mx-32 py-5 justify-start">Have questions or just wondering what a CS degree looks like at Rice University? Check out some of our resources below!</p>
      <p className="flex underline mx-40 justify-start" onClick={() => window.open('https://ga.rice.edu/programs-study/departments-programs/engineering/computer-science/computer-science-bscs/#requirementstext')}>Four year plan</p>
      <p className="flex underline mx-40 mb-4 justify-start">Study abroad resources</p>
      <div class = 'flex mx-40'>
            <FAQList/>
      </div>
      <p className="flex mx-32 mt-8 py-8 justify-start">Have a specific question? Reach out to one of our upperclassmen!</p>
      <div className="flex ml-32 justify-center justify-around">{profilelist}</div>
      <div> 
      <img src={blue_gradient}/> 
      </div>     
      <Footer/>
    </div>
  );
}

export default ResourcesPage;
