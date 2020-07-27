import React from 'react'


function FAQ (props) {
    //takes in title, month, day, locale, desc, and link
    let question = props.question;
    let answer = props.answer;
    
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