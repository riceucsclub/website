import React from 'react';
import {
    Link
  } from 'react-router-dom';

export const Tab = (props) =>
{
    const eventHandler = (val) => {
        if (val[1] !== props.activeTag[0]){
            props.setActiveTag(val);
        }
    };


    return (
        <Link to={props.link} className="text-gray-500 py-2 px-4 text-lg font-bold" onClick={() => eventHandler(props.text)}>{props.text}</Link>
     
    );
};