import React from 'react'



function Officer (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let title = props.title;
    let college = props.college;
    let hometown = props.hometown;
    
    let content = 
    <div className="flex flex-wrap justify-center">
        <div className="px-4">
            <img src={image} className="shadow w-1/3 justify-center max-w-full h-auto align-middle border-none" />
            <h1>{name}</h1>
            <h1>{title}</h1>
            <h1>{college}</h1>
            <h1>{hometown}</h1>

        </div>
        
    </div>



    // <h1 class = 'w-180 flex flex-row'>

    //     <info class = 'flex flex-col ml-2 mt-1'>
    //         <name class = ''>
    //             {question}
    //         </name>
    //         <blurb class = 'font-light text-xs'>
    //             {answer}
    //         </blurb>
    //     </info>
    // </h1>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default Officer