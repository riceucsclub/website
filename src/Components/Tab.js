import React from 'react';

export const Tab = (props) =>
{
    const eventHandler = (val) => {
        if (val[1] !== props.activeTag[0]){
            props.setActiveTag(val);
        }
    };


    return (
        <button className="text-gray-500 py-2 px-4 text-lg font-bold" onClick={() => eventHandler(props.text)}>{props.text}</button>
     
    )
};