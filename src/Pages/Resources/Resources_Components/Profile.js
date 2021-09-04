import React from 'react'



function Profile (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let email = props.email;
    
    let content = 
    <div className="md:flex items-center align-middle justify-center">
        <div className="flex flex-col px-4 py-4 items-center justify-center">
            <img src={image} className="justify-center items-center max-w-screen rounded-full h-auto align-middle border-none" width = "160px"  />
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