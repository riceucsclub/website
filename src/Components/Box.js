import React, {useState} from 'react'

function Box (props){
    // accepts props for title and description
    const [hover, setHover] = useState(false)    
    

    let contentt = 
        <div class = "static flex flex-row items-center justify-center h-56 rounded-lg bg-teal-500b">
            <div class = "text-4xl px-5 text-center text-white font-semibold">
                {props.title}
            </div>            
        </div>
    
    let contentd = 
        <div class = "static flex items-center justify-center text-center h-56 px-5 bg-white rounded-lg shadow-teal ">
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

        <div class = "relative group h-56 shadow rounded-lg w-1/3 bg-blue-500...">

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