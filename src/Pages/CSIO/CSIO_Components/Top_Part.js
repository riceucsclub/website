import React, { useState } from 'react';
import tan_rect from '../../../Files/tan_rect.svg';
import group_photo from '../../../Files/group_photo.svg';
import officers from '../../../Files/2019_officers.svg';


import {
  NavLink
} from 'react-router-dom';

function Top_Part() {

  const [isShown, setIsShown] = useState(false);
  //
  //onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}
  //style="background-image: url("tan_rect.svg");


//!isShown
  if (!isShown){
    return (
      <div className="">
          {/* <img className = "absolute w-full top-0 z-0" src={tan_rect}/> */}
        <header className="absolute z-10 px-6 bg-orange-200 py-6 font-bold text-2xl">CS IO</header>
        <div className="bg-orange-200 relative z-0 flex justify-center content-around h-screen flex-wrap">
            <div className="font-bold justify-center text-center py-6 text-6xl" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>We help students have their voices* heard.</div>
	</div>
    </div>
    );
}

  else {
    return (
    <div className="bg-black">
    <img className = "bg-black overflow-x-auto absolute w-full opacity-50 top-0 z-0" width="100%" src={officers}/>
      <header className="absolute z-10 px-6 py-6 font-bold text-white text-2xl">CS IO</header>
      <div className="relative grid grid-cols-3 z-0 flex justify-center content-around h-screen flex-wrap">
          <div> </div>
          <div className="justify-center text-white text-center py-6 text-2xl" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>We strive to create a meaningful space for both Rice students to voice their opinions and ideas about Rice CS and for the Computer Science Department to consult initiatives with the student body.</div>
          <div> </div>
      </div>
    </div>
    );
    
  }
}
  
export default Top_Part;

