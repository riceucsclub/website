import React from 'react'


function Profile (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let email = props.email;
    
    let content = 
    <h1 class = 'w-180 flex flex-row'>

        <info class = 'flex flex-col ml-2 mt-1'>
            <name class = ''>
                {question}
            </name>
            <blurb class = 'font-light text-xs'>
                {answer}
            </blurb>
        </info>
    </h1>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default FAQ