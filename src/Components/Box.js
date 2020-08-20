import React, { useState } from 'react';

function Box(props) {
  const title = props.title;
  const body = props.body;

  const [isShown, setIsShown] = useState(false);
  
  const chooseBox = () => {

  }

  if (!isShown){
    return (
      <div class="flex md:w-1/3 h-64 sm:w-1/6 rounded-lg justify-around shadow-lg bg-blue-200 my-3" onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
          <div class="flex-none content-center px-15 py-20">
                  <span class="font-semibold text-white content-center md:text-5xl sm:text-xs">{title}</span>
          <div>
      </div>
      </div>
	</div>
    );
}

  else {
    return (
      <div class="flex md:w-1/3 h-64 sm:w-1/6 rounded-lg justify-around shadow-lg my-3" onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
          <div class="flex-none content-center px-15 py-12">
          <div class="px-10 text-gray-500">{body}</div>
          <div>
      </div>
      </div>
    
</div>
    );
  }
}

export default Box;