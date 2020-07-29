import React from 'react'



function Profile (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let email = props.email;
    
    let content = 
    <div className="flex items-center align-middle justify-center">
        <div className="px-4">
            <img src={image} className="shadow w-1/3 justify-center rounded-full max-w-full h-auto align-middle border-none" />
            <h1 className="font-semibold">{name}</h1>
            <h1>{email}</h1>
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

export default Profile