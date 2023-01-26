import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import triangles from '../../Files/Triangles.svg'
/* import graphic from '../../Files/graphic1.jpg' */
import graphic from '../../Files/undraw_building_websites.svg'

import teal_grad from '../../Files/gradients/home_about.svg'
import gray_grad from '../../Files/gradients/home_events.svg'
import EventWheel from './Home_Components/EventWheel'

import Subsidaries from './Home_Components/Subsidaries'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import luay from '../../Files/Home_Gallery/12976851_1138128249563543_7955453846841172046_o.jpg'
import tim from '../../Files/Home_Gallery/84334897_2881793055197045_101138358037643264_o.jpg'
import beach from '../../Files/Home_Gallery/116396755_1957654227698199_1890081075763795255_n.jpg'


const first_blurb = `Creating a community of mentors 
and friends and partnering with companies 
to provide the best resources for students to 
explore computer science and software engineering.`;



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
      <Header/>
      <div className="flex flex-col md:flex-row justify-evenly items-center h-900px md:h-screen pt-100px bg-whitegeometric">
        <div className="md:w-400px lg:w-500px laptop-l:w-600px md:ml-10 ">
          <div className="relative text-rice-blue text-center md:text-left font-bold text-4xl lg:text-5xl laptop-l:text-6xl mt-10 ease-animation">
            Rice University
            <br></br>
            CS Club
          </div>
          <div className="rounded text-rice-blue text-center md:text-left mx-10 md:mx-0">
              <p className="relative z- my-20 w-auto md:mt-0 font-light leading-snug text-xl lg:text-2xl laptop-l:text-3xl ease-animation">
                {first_blurb}
              </p>
          </div>
        </div>
        <img className="w-300px mb-10 md:mb-0 justify-self-center md:w-300px lg:w-500px laptop-l:w-600px md:mr-10" src={graphic}></img>
      </div>

      {/* <img className="opacity-0 md:opacity-0 absolute z-10 -mt-36 bg-no-repeat bg-left" width="240px" height="240px" src={triangles}/> */}

      <div class = "relative z-10 mt-12 mb-12 flex flex-col lg:flex-row mx-12 justify-center ">
        {/* <img src={teal_grad} class = "hidden absolute z-0 -mt-20 right-0"/> */}
        <div class="flex justify-center order-last lg:order-first mt-2 md:mr-8">
          <gall class = "lg:w-128 w-4/5">
            <AliceCarousel items = {gall} autoPlay={true} autoPlayInterval={2500} duration = {1000} 
            mouseTrackingEnabled buttonsDisabled/>  
          </gall>
        </div>
        <copy class = "relative z-10 flex flex-col">
          <subhead class = "text-center lg:text-left font-semibold text-3xl md:text-4xl">
            Who we are
          </subhead>
          <body class = "text-center lg:text-left font-light text-xl md:text-2xl mx-2 md:mx-0 my-4 lg:my-0">
            Rice CS Club is an organization dedicated to providing Rice students with a tight-knit community 
            of friends and mentors to promote and advocate computer science and working with tech. Community 
            events include study breaks, social outings, and meet and greets between different classes. We 
            also provide professional resources for members including company-sponsored informational and 
            networking events, resume and algorithm review sessions, social outings, and tech workshops.
          </body>
        </copy>
      </div>

      {/* <img src={gray_grad} class = "absolute z-0 -mt-8"/> */}
      <div  class = "relative justify-center">
        <EventWheel/>
      </div>
      

      <div  class = "relative z-10">
        <Subsidaries/>
      </div>

      {/* testimonials/interviews */}
      <div class = "flex flex-col relative z-10 text-xl font-light mx-1/6 mb-4 mt-24">
        <copy>
        "I participated in HackRice my freshman year because I heard it was really fun. I didn’t know anyone else
        who was participating, so I joined a random team at the start of the event. We worked together really well 
        and we actually ended up winning first prize! HackRice was a super rewarding experience- I got to meet and 
        learn from so many different people, make lots of new friends, and see some really interesting projects. I 
        had such a great time and I wanted to give back, so I’ve stayed involved ever since. This year I’m co-directing HackRice!"
        </copy>
        <person class = "ml-1/10 my-4">
          — Claire Wang, Class of 2022
        </person>
      </div>
      <Footer/>
    </div>
       
    );
  }

export default HomePage;