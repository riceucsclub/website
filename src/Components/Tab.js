import React from 'react';

export const Tab = (props) =>
{
    const eventHandler = (val) => {
        if (val[1] !== props.activeTag[0]){
            //props.setClicked(!props.clicked);
            // if (!props.clicked){
            //     props.setActiveTag(val);
            // }
            props.setActiveTag(val);
            // else {
            //     props.setActiveTag("");
            // }
        }
    };


    return (
        <button className="text-gray-500b py-2 px-4 text-lg font-bold" onClick={() => eventHandler(props.text)}>{props.text}</button>
     
    )
};