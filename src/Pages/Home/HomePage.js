import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import triangles from '../../Files/Triangles.svg'
import graphic from '../../Files/graphic1.jpg'
import blue_gradient from '../../Files/gradient2.svg'
import Subsidaries from './Home_Components/Subsidaries'



const head = "RICE UNIVERSITY";
const first_blurb = `Creating a community of mentors 
and friends and partner with companies 
to provide the best resources for students to 
explore computer science and software`;

function HomePage() {
    return (
    <div className="relative">
      <img class="flex right-0 w-60 h-60 absolute mr-32" src={graphic}></img>
      <div className="flex text-gray-500 text-6xl font-semibold mt-24 ml-32 justify-start">{head}</div>
      <div className="flex text-gray-500 text-6xl font-semibold ml-32 justify-start">CS CLUB</div>
      <div class="max-w-sm rounded overflow-hidden mt-8 ml-32">
          <p class="text-gray-500 space-y-1 text-base">{first_blurb}</p>
      </div>
      <img class="absolute object-left" width="200px" height="150px" src={triangles}/>
      <img class="flex mt-32 absolute right-0" width="1000px" height="500px" src={blue_gradient}/>
      <Subsidaries/>
      <Footer/>
    </div>
       
    );
  }

export default HomePage;