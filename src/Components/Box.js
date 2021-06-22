import React, {useState} from 'react'

function Box (props){
    // accepts props for title and description
    const [hover, setHover] = useState(false)


    let contentt =
        <div class = "static flex flex-row items-center justify-center h-56 rounded-lg bg-teal-500b shadow">
            <div class = "text-2xl md:text-3xl xl:text-4xl px-5 text-center text-white font-semibold">
                {props.title}
            </div>
        </div>

    let contentd =
        <div class = " flex text-2xs md:text-base text-center items-center p-4 lg:h-56 bg-white rounded-lg shadow-teal shadow">
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

        <div class = "relative group h-56  rounded-lg w-2/5 bg-blue-500...">

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