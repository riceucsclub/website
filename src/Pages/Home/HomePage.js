import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import triangles from '../../Files/Triangles.svg'
import graphic from '../../Files/graphic1.jpg'
import blue_gradient from '../../Files/gradient2.svg'
import Subsidaries from './Home_Components/Subsidaries'
import EventWheel from './Home_Components/EventWheel'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import luay from '../../Files/Home_Gallery/12976851_1138128249563543_7955453846841172046_o.jpg'
import tim from '../../Files/Home_Gallery/84334897_2881793055197045_101138358037643264_o.jpg'
import beach from '../../Files/Home_Gallery/116396755_1957654227698199_1890081075763795255_n.jpg'


const head = "RICE UNIVERSITY";
const first_blurb = `Creating a community of mentors 
and friends and partner with companies 
to provide the best resources for students to 
explore computer science and software`;



function HomePage() {

    let imgs = [luay, tim, beach]
    let gall = []
    

    for(let i = 0; i < imgs.length; i++){
      gall.push(
      <div>
        <img src = {imgs[i]} height="100px" />
      </div>
      )
    }

    return (
    <div className="relative">
      
      <img class="flex right-0 w-60 h-60 absolute mr-32" src={graphic}></img>
      <div className="flex text-gray-500b text-6xl font-bold mt-24 ml-32 justify-start">{head}</div>
      <div className="flex text-gray-500b text-6xl font-bold ml-32 justify-start">CS CLUB</div>
      
      <div class="w-148 rounded overflow-hidden mt-8 ml-32">
          <p class="text-gray-500b space-y-1 font-light leading-snug text-3xl">{first_blurb}</p>
      </div>
      <img class="object-left absolute -mt-16" width="250px" height="250px" src={triangles}/>

      <div class = "relative z-10 ml-32 mt-24 flex flex-row">
        <gall class = "w-148">
          <AliceCarousel items = {gall} autoPlay={true} autoPlayInterval={2500} duration = {1000} 
          mouseTrackingEnabled buttonsDisabled/>  
        </gall>
        <copy class = "ml-12 flex flex-col w-176">
          <subhead class = "font-semibold text-5xl -mt-4">
            Who we are
          </subhead>
          <body class = "font-light text-2xl">
            Rice CS Club is an organization dedicated to providing Rice students with a tight-knit community 
            of friends and mentors to promote and advocate computer science and working with tech. Community 
            events include study breaks, social outings, and meet and greets between different classes. We 
            also provide professional resources for members including company-sponsored informational and 
            networking events, resume and algorithm review sessions, social outings, and tech workshops.
          </body>
        </copy>
      </div>

      <div  class = "relative z-10 mb-24">
        <EventWheel/>
      </div>
      
      <div  class = "relative z-10 mb-24">
        <Subsidaries/>
      </div>

    </div>
       
    );
  }

export default HomePage;