import React from 'react'
import FAQ from './FAQ'
import FAQs from '../../../Files/FAQs'



function FAQList () {
    let faqlist = []
    console.log(FAQs)
    for(let i = 0; i < FAQs.length; i++){
        faqlist.push(
            <FAQ 
                question = {FAQs[i]["question"]}
                answer = {FAQs[i]["answer"]}
            />
        )
    }


    return (
        <div>
            <subheading class = 'font-semibold text-xl'>
                Frequently Asked Questions
            </subheading>
            <events>
                {faqlist}
            </events>
        </div>
    )
}

export default FAQList