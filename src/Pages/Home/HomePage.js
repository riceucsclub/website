import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import triangles from '../../Files/Triangles.svg'
import graphic from '../../Files/graphic1.jpg'
import blue_gradient from '../../Files/gradient2.svg'


const head = "RICE UNIVERSITY";
const first_blurb = `Creating a community of mentors 
and friends and partner with companies 
to provide the best resources for students to 
explore computer science and software`;

function HomePage() {
    return (
    <div className="relative">
      <img class = "absolute mt-32 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/>
      <img class="flex right-0 w-60 h-60 absolute mr-32" src={graphic}></img>
      <div className="flex text-gray-500b text-6xl font-semibold mt-24 ml-32 justify-start">{head}</div>
      <div className="flex text-gray-500b text-6xl font-semibold ml-32 justify-start">CS CLUB</div>
      <div class="max-w-sm rounded overflow-hidden mt-8 ml-32 mb-84">
          <p class="text-gray-500b space-y-1 text-base">{first_blurb}</p>
      </div>
      

      <Footer/>
    </div>
       
    );
  }

export default HomePage;