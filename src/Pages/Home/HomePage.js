import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import triangles from '../../Files/Triangles.svg'
import graphic from '../../Files/graphic1.jpg'
import blue_gradient from '../../Files/gradient2.svg'
import Subsidaries from './Home_Components/Subsidaries'

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
        <img src = {imgs[i]} className = "sliderimg"/>
      </div>
      )
    }

    return (
    <div className="relative">
      <img class="flex right-0 w-60 h-60 absolute mr-32" src={graphic}></img>
      <div className="flex text-gray-500b text-6xl font-semibold mt-24 ml-32 justify-start">{head}</div>
      <div className="flex text-gray-500b text-6xl font-semibold ml-32 justify-start">CS CLUB</div>
      <div class="max-w-sm rounded overflow-hidden mt-8 ml-32">
          <p class="text-gray-500b space-y-1 text-base">{first_blurb}</p>
      </div>
      <img class="absolute object-left" width="200px" height="150px" src={triangles}/>

      <div class = "relative h-32">
        <AliceCarousel items = {gall} autoPlay={true} duration = {3000} mouseTrackingEnabled playButtonEnabled={true} />
        yee
      </div>
      
      <Subsidaries/>
      
    </div>
       
    );
  }

export default HomePage;