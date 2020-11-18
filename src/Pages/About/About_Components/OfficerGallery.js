import React from 'react'
import Officer from './Officer'
import OfficerList from '../../../Files/OfficerList'



function OfficerGallery () {
    let officers = []
    for(let i = 0; i < OfficerList.length; i++){
        officers.push(
            <Officer 
                image = {OfficerList[i]["image"]}
                name = {OfficerList[i]["name"]}
                title = {OfficerList[i]["title"]}
                hometown = {OfficerList[i]["hometown"]}
                college = {OfficerList[i]["college"]}
            />
        )
    }


    return (
        <div className="ml-24 mt-8 grid row-gap-8 col-gap-4 grid-cols-5 ">
            {officers}
        </div>
    )
}

export default OfficerGallery
