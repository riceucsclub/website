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
        <div class = "">
            <top class = "flex flex-row mt-2">
                <date class = "flex flex-col ml-5">
                    <d class = "text-3xl">
                        {day}
                    </d>
                    <m class = "text-blue-600 -mt-2"> 
                        {month}
                    </m>
                </date>
                <name class = "w-7/12 text-lg font-semibold text-center mt-1 ml-8 ">
                    {title}
                </name>
            </top>
            <logistic class = "flex flex-row  justify-between font-light text-sm text-gray-600 mt-1">
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
                <a href={link} target="_blank">
                    Facebook link
                </a>
            </lonk>
                
        </div>

{/* <a  className="block px-4 py-2 border-b text-gray-500b hover:font-bold">Remix CS</a> */}

    return(
        <div class = "w-1/4 rounded-lg bg-white shadow-teal">
            {content}
        </div>
    )
}

export default EventBox