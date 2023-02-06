import React, { useState } from 'react'

function Box(props) {
    // accepts props for title and description
    const [hover, setHover] = useState(false)


    let contentt =
        <div class="static flex items-center justify-center md:mx-2 md:h-56 rounded-lg bg-rice-blue shadow">
            <div class="text-2xl md:text-3xl xl:text-4xl px-5 text-center text-white font-semibold leading-1">
                {props.title}
            </div>
        </div>

    let contentd =
        <div class="static flex items-center md:h-56 text-[5px] md:text-base text-center md:p-2 bg-white rounded-lg border-rice-blue border-4">
            {props.desc}
        </div>

    let detector =
        <button class="absolute w-full h-64 bg-rice-blue opacity-0"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            mouse over here
        </button>


    return (

        <div class="relative group h-56  rounded-lg w-2/5 bg-rice-blue...">

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