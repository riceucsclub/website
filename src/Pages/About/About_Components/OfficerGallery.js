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

    //number of columns must be manually adjusted for each size
    //rough when the gallery dimensions change
    return (
        <div className="px-24 mt-8 grid row-gap-8 col-gap-24 grid-cols-1 sm:grid-col-2
        md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {officers}
        </div>
    )
}

export default OfficerGallery
