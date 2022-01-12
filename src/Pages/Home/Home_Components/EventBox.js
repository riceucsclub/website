import React from 'react'

function EventBox (props) {

    let title = props.title
    let month = props.month
    let day = props.day
    let locale = props.locale
    let desc = props.desc
    let link = props.link
    let time = props.time
    let endMonth = props.endMonth
    // capitalize only first letter of month
    endMonth = endMonth.charAt(0) + endMonth.substring(1).toLowerCase();
    let endDay = props.endDay
    let dateTime = null

    // handles both timed and all-day events
    if (time != null) {
        dateTime = 
            <tim class = "flex justify-center mx-5">
                Time: {time}
            </tim>
    } else {
        dateTime =
            <tim class = "flex justify-center mx-5">
                Ends: {endMonth} {endDay}
            </tim>
    }

    let content =
        <div class = "">
            <top class = "flex flex-col justify-center mt-2">
                <date class = "flex flex-col text-center">
                    <d class = "text-4xl p-2 md:text-5xl">
                        {day}
                    </d>
                    <m class = "text-xl md:text-2xl text-blue-600 -mt-2"> 
                        {month}
                    </m>
                </date>
                <name class = "text-lg font-semibold text-center mt-1 mx-5">
                    {title}
                </name>
            </top>
            <logistic class = "flex flex-col justify-left font-light text-sm text-gray-600 mt-1">
                <div class="flex flex-row justify-center">
                    <loc class = "flex justify-center">
                        Location:
                    </loc>
                    <loc class = "flex justify-center mx-1" dangerouslySetInnerHTML={{ __html: locale }}>
                    </loc>
                </div>
                {dateTime}
            </logistic>
            <blurb class = "flex justify-between font-light text-sm items-center text-center mx-5 mt-1">
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </blurb>
            <lonk class = "flex justify-center font-light text-sm text-blue-500 pb-4">
                <a href={link} target="_blank">
                    Link
                </a>
            </lonk>
                
        </div>

{/* <a  className="block px-4 py-2 border-b text-gray-500b hover:font-bold">Remix CS</a> */}

    return(
        <div class = "w-3/5 md:w-1/4 my-4 rounded-xl bg-white border-rice-blue border-4 px-2">
            {content}
        </div>
    )
}

export default EventBox