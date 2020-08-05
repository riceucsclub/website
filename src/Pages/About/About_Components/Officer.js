import React from 'react'



function Officer (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let title = props.title;
    let college = props.college;
    let hometown = props.hometown;
    
    let content = 
    <div className="flex w-2/3 flex-wrap center justify-center">
        <div className="px-4 justify-center align-middle">
            <img src={image} className="flex items-center justify-center max-w-full h-auto border-none" />
            <h1 className="text-center font-semibold text-2xl">{name}</h1>
            <h1 className="text-center font-semibold text-xl">{title}</h1>
            <h1 className="text-center">{college}</h1>
            <h1 className="text-center">{hometown}</h1>
        </div>
    </div>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default Officer