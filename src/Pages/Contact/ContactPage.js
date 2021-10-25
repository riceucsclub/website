import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import boxText from '../../Files/boxText'

// import triangles from '../../Files/Triangles.svg'

import {
    NavLink
} from 'react-router-dom';

function ContactPage(props) {

    console.log(props, 'prop');

    // const [activeTag, setActiveTag] = useState("");
    // const tabs = ['About', 'Resources', 'Events', 'Subsidiaries', 'Contact'];
    // let text = '';

    const link_mail = <a className="text-gull-gray hover:text-gray-600" href="mailto:riceucsclub@gmail.com">riceucsclub@gmail.com</a>;
    const link_mailing_list = <NavLink className="hover:text-gray-600" exact to="/about">mailing list</NavLink>;

    return (
        <div class="relative z-0">
            <Header />
            {/* <img class = "opacity-0 md:opacity-100 absolute z-10 mt-36 bg-no-repeat bg-left" src={triangles} width="250px" height="250px"/> */}
            <div className="px-10 pt-100px">
                <div class='text-4xl lg:text-5xl laptop-l:text-6xl text-rice-blue text-center font-semibold'>
                    We love hearing from you!
                </div>
                <p className="text-center text-xl mt-3 text-light">
                    If you need to contact club leadership, email us at&nbsp;{link_mail}.
                </p>
                <div className="text-center text-xl mt-3 text-light">
                    Stay up to date on the latest events and activities by subscribing to our&nbsp;{link_mailing_list}.
                </div>
                <div class='text-center text-2xl font-medium mt-16'>
                    Looking to get involved from outside of Rice?
                </div>
                <div class='text-center text-xl text-light'>
                    Check out these opportunities!
                </div>
            </div>

            <div class='hidden md:px-32 relative md:flex justify-around xl:px-64 mt-20 mb-40'>
                <Box title={boxText["nameT"]} desc={boxText["blurbT"]} />
                <Box title={props.box["nameS"]} desc={props.box["blurbS"]} />
            </div>

            <div className="md:hidden flex relative flex-col justify-center items-center mx-1/6">
                <div class="flex flex-col text-2xs md:text-base text-center items-center my-5 px-5 py-2 bg-white rounded-lg border-4 border-rice-blue">
                    <h2 class="text-xl font-semibold">{props.box["nameT"]}</h2>
                    <p>{props.box["blurbT"]}</p>
                </div>
                <div class="flex flex-col text-2xs md:text-base text-center items-center my-5 px-5 py-2 bg-white rounded-lg border-4 border-rice-blue">
                    <h2 class="text-xl font-semibold">{props.box["nameS"]}</h2>
                    <p>{props.box["blurbS"]}</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default ContactPage