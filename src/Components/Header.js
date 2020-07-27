import React from 'react'
import csclublogo from '../Files/csclub_logo.png';
import { Tab } from "../Components/Tab"
import gray_gradient from '../Files/gradient1.svg'
import {
    Link
  } from 'react-router-dom';



function Header (props){

    const tabs = props.tabs;
    let tabsArray = [];

    
    tabs.forEach(element => {
        let modified = element;
        let modlink = '/' + element.toLowerCase();
        if (element === props.activeTag){
            modified = "<" + element + "/>";
        }
        tabsArray.push(<Tab clicked={props.clicked}
                                setClicked={props.setClicked} 
                                activeTag={props.activeTag} 
                                setActiveTag={props.setActiveTag} 
                                text={modified}
                                link={modlink}/>);
    });
    
    const homeHandler = () => {
        props.setActiveTag("")
        return <Link to="/"></Link>
        //window.location.replace('csclub.rice.edu)
    };

    return (
       <header>
           <div className="flex justify-between items-center py-1">
            {/* <div className="flex items-end absolute w-24 h-24">
                <img src={gray_gradient}/>
            </div> */}
                <div>
                    <img src={csclublogo} alt="Logo" width="120px" height="120px" className="justify-start px-3 py-6" onClick={() => homeHandler()}/>
                </div>
                <img className="flex right-0 absolute w-24 h-24" src={gray_gradient}/>
                    <ul className="flex mr-10">
                        {tabsArray}
                    </ul>
           </div>
       </header> 
    )
}

export default Header