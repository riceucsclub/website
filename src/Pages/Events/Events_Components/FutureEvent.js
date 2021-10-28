import React from 'react'




function FutureEvent (props) {
    //takes in title, month, day, locale, desc, and link

    let title = props.title
    let month = props.month 
    let day = props.day
    let locale = props.locale
    let desc = props.desc
    let link = props.link
    let time = props.time

    


    let content = 
    <h1 class = "flex flex-row my-4 mx-1/6 md:mx-36 xl:mx-72">
        
        {/* left side of component */}
        <date class = "flex flex-col">
            <d class = "text-3xl font-light">
                {day}
            </d>
            <m class = "text-blue-600 font-light">
                {month}
            </m>
        </date>

        {/* right side of component */}
        <info class = "flex flex-col ml-2 mt-1">
            <name class = "">
                {title}
            </name>
            <loc class = "flex flex-row text-gray-600 font-light text-sm">
                <div class = "mr-2">
                    <div dangerouslySetInnerHTML={{ __html: locale }} />
                </div>
                {time}    
            </loc>
            <blurb class = "font-light text-xs">
                {/* any html in the event description will get parsed correctly this way */}
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </blurb>
            <social class = "font-light text-xs text-blue-500 hover:text-rice-blue transition">
                <a href={link} target="_blank">
                    Link
                </a>
            </social>
        </info>
    </h1>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default FutureEvent