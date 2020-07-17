import React, { useState } from 'react';

function Box(props) {
  const title = props.title;
  const body = props.body;

  const [isShown, setIsShown] = useState(false);
  
  const chooseBox = () => {

  }

  if (!isShown){
    return (
      <div class="flex md:w-1/3 sm:w-full rounded-lg justify-around shadow-lg bg-blue-200 my-3" onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
          <div class="flex content-center px-15 py-20">
                  <span class="font-bold text-white text-bold content-center text-5xl">{title}</span>
          <div>
      </div>
      </div>
      
      	{/* <div class="px-10 py-5 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      	</div>
      
      	<div class="px-5 py-4 flex justify-end">
          
      	</div> */}
	</div>
    );
}

  else {
    return (
      <div class="flex md:w-1/3 sm:w-full rounded-lg justify-around shadow-lg my-3" onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
          <div class="flex content-center px-15 py-20">
          <div class="px-10 py-1 text-gray-500">{body}</div>
          <div>
      </div>
      </div>
    
      {/* <div class="px-10 py-5 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    
      <div class="px-5 py-4 flex justify-end">
        
      </div> */}
</div>
    );
  }
}

export default Box;