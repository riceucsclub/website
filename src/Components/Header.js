import React from 'react'
import csclublogo from '../csclub_logo.png';
import { Tab } from "../Components/Tab"

function Header (props){

    const tabs = props.tabs;
    let tabsArray = [];

    
    tabs.forEach(element => {
        let modified = element;
        if (element === props.activeTag){
            modified = "<" + element + "/>";
        }
        tabsArray.push(<Tab clicked={props.clicked}
                                setClicked={props.setClicked} 
                                activeTag={props.activeTag} 
                                setActiveTag={props.setActiveTag} 
                                text={modified}/>);
    });
    

    return (
       <header>
           <div className="flex justify-between items-center py-1">
                <div class="flex-shrink-0">
                    <img src={csclublogo} alt="Logo" width="120px" height="120px" className="justify-start px-3 py-6" onClick={() => props.setActiveTag("")}/>
                </div>
            <ul class="mr-10 font-bold">
                {tabsArray}
            </ul>
           </div>
       </header> 
    )
}

export default Header