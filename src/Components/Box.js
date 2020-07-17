import React, {useState, useEffect} from 'react'

function Box (props){
    // accepts props for title and description
    const [hover, setHover] = useState(false)    
    

    let contentt = 
        <div class = "static flex flex-row items-center justify-center h-56 rounded-lg bg-teal-500b">
            <div class = "text-4xl w-64 text-center text-white font-semibold">
                {props.title}
            </div>            
        </div>
    
    let contentd = 
        <div class = "static flex items-center justify-center text-center h-56 bg-white rounded-lg shadow-teal ">
                {props.desc}
        </div>
    
    let detector =
        <button class = "absolute w-full h-64 bg-green-500 opacity-0"
            onMouseEnter = {() => setHover(true)}
            onMouseLeave = {() => setHover(false)}
        >
            mouse over here
        </button>


    return (

        <div class = "relative group ml-20 mt-20 w-84 h-56 shadow rounded-lg bg-blue-500...">

            {/* detects mouse presence */}
            {detector}

            {!hover && <div>
                {contentt}
            </div>}

            {hover && <div>
                {contentd}
            </div>}
                

        </div>
    )
}

export default Box