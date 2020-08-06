import React from 'react'
import yellow_bullet_pt from '../../../Files/yellow_bulletpt.png'


function FAQ (props) {
    //takes in title, month, day, locale, desc, and link
    let question = props.question;
    let answer = props.answer;
    
    let content = 
    <h1 class = 'w-180 flex flex-row'>

        <ul class = 'list-disc flex flex-col ml-6 mt-1'>
            {/* <img src={yellow_bullet_pt} width="15px"/> */}
            <li class = ''>
                {question}
            </li>
            <blurb class = 'font-light text-xs'>
                {answer}
            </blurb>
        </ul>
    </h1>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default FAQ