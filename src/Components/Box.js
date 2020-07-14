import React, {useState, useEffect} from 'react'

function Box (props){
    // accepts props for title and description
    const [hover, setHover] = useState(false)    
    let content = <div class = "static text-center w-64 h-32 bg-blue-500 opacity-50"> hoi </div>

    // function changeHover() { 
    //     console.log("change")
    //     setHover(!hover)
    // }

    let contentt = 
        <div class = "static flex flex-row items-center justify-center bg-blue-500">
            {props.title}
            
        </div>
    
    let contentd = 
        <div class = "static text-center w-64 h-64 bg-blue-500">
            {props.desc}
        </div>
    


    // useEffect(() => {
    //     if(hover){
            // content = 
            // <div class = "static text-center w-64 h-64 bg-blue-500">
            //     {props.title}
            // </div>
            // console.log(content, 'content')
    //     }
    //     else {
    //         content = 
    //         <div class = "static text-center w-64 h-64 bg-green-500">
    //             {props.desc}
    //         </div>
    //     }
    // }, [hover]);

    return (

        <div class = "relative group ml-20 mt-20 h-auto w-64 shadow bg-blue-500...">

            {/* detects mouse presence */}
            <button class = "absolute h-64 w-64 bg-green-500 opacity-25"
                onMouseEnter = {() => setHover(true)}
                onMouseLeave = {() => setHover(false)}
            >
                mouse over here
            </button>

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