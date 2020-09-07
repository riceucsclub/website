import React from 'react'



function Profile (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let email = props.email;
    
    let content = 
    <div className="flex w-1/2 items-center align-middle justify-center">
        <div className="px-4">
            <img src={image} className="justify-center rounded-full max-w-full h-auto align-middle border-none" />
            <h1 className="font-semibold text-center">{name}</h1>
            <h1 className="text-center">{email}</h1>
            
        </div>
        
    </div>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default Profile