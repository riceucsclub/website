import React from 'react'

function EventBox (props) {

    let title = props.title
    let month = props.month
    let day = props.day
    let locale = props.locale
    let desc = props.desc
    let link = props.link
    let time = props.time

    let content =
        <div>
            <top class = "flex flex-row mt-2">
                <date class = "flex flex-col ml-5">
                    <d class = "text-3xl">
                        {day}
                    </d>
                    <m class = "text-blue-600 -mt-2"> 
                        {month}
                    </m>
                </date>
                <name class = " w-7/12 text-lg text-center mt-1 ml-4">
                    {title}
                </name>
            </top>
            <logistic class = "flex flex-row  justify-between font-hairline text-sm text-gray-700 mt-1">
                <loc class = "ml-10">
                    Location: {locale}
                </loc>
                <tim class = "mr-12">
                    Time: {time}
                </tim>
            </logistic>
            <blurb class = "flex justify-between font-light text-sm text-center mx-5 mt-1">
                {desc}
            </blurb>
            <lonk class = "flex justify-center font-light text-sm text-blue-500">
                {link}
            </lonk>
                
        </div>

    return(
        <div class = "h-5/6 w-1/4 rounded-lg bg-white shadow-teal">
            {content}
        </div>
    )
}

export default EventBox