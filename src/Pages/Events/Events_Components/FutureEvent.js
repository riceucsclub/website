import React from 'react'


function FutureEvent () {
    //takes in title, month, day, location, desc, and link

    let title = "Late Night Event with a Very Long Name"
    let month = "AUG"
    let day = "30"
    let locale = "Duncan Hall"
    let desc = `Throughout the year, we hold social events such as lunches, 
    study breaks, mixers, bowling nights, and random outings. We regularly 
    host a study break or Christmas party after classes end.`
    let link = `Facebook link`


    let content = 
    <h1 class = 'w-180 flex flex-row'>
        
        <date class = "flex flex-col">
            <d class = 'text-2xl'>
                {day}
            </d>
            <m class = '-mt-1 text-blue-600 font-light'>
                {month}
            </m>
        </date>

        <info class = 'flex flex-col ml-2'>
            <name class = ''>
                {title}
            </name>
            <loc class = '-mt-1 text-gray-600 font-light text-sm'>
                {locale}
            </loc>
            <blurb class = 'font-light text-xs'>
                {desc}
            </blurb>
            <social class = 'font-light text-xs text-blue-500'>
                {link}
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