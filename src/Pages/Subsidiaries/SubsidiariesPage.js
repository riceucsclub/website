import React from 'react';
import Footer from '../../Components/Footer'
import Box from '../../Components/Box'
import Header from '../../Components/Header'
import hackrice_logo from '../../Files/logos/HackRice_dark.svg'
import remixcs_logo from '../../Files/logos/remixcs3.png'
import riceapps_logo from '../../Files/logos/riceapps.png'
import csio_logo from '../../Files/logos/csio-temp.png'

function SubsidiariesPage(props) {

    const head = "Our Subsidiaries";

    return(
        <div className="relative">
            <Header />
            <div className="relative z-10 text-rice-blue text-center font-bold text-4xl lg:text-5xl laptop-l:text-6xl pt-100px">{head}</div>
            <div className="grid grid-cols-5 w-3/5 mb-10 mx-auto">
                <div className="relative col-span-1">
                    <img src={remixcs_logo} alt="Logo" width="100px" className="absolute right-0 mt-14"/>
                </div> 
                <div className="relative col-span-4">
                    <h1 className="text-gray-500b text-center md:text-left text-2xl md:text-3xl font-semibold px-12 mt-12">Remix CS</h1>
                    <p className="flex md:text-xl py-5 px-12 justify-end">RemixCS aims to provide a platform for CS outreach to the greater Houston K-12 community to inspire future computer scientists of all backgrounds, specifically underrepresented minorities in CS. Through RemixCS, Rice students can volunteer to mentor students in topics ranging from programming and web development to college application advice.</p>
                </div>
                <div className="relative col-span-1">
                    <img src={hackrice_logo} alt="Logo" width="100px" className="absolute right-0 mt-14"/>
                </div> 
                <div className="relative col-span-4">
                    <h1 className="text-gray-500b text-center md:text-left text-2xl md:text-3xl font-semibold px-12 mt-12">HackRice</h1>
                    <p className="flex md:text-xl py-5 px-12 justify-end">HackRice is Rice's premier student-run hackathon, open to students of all majors and programming backgrounds. Over the course of a weekend, participants collaborate in teams to develop projects, network with industry-leading companies, and learn new tools and systems. Students interested in helping organize HackRice can apply for the HackRice board.</p>
                </div>
                <div className="relative col-span-1">
                    <img src={riceapps_logo} alt="Logo" width="100px" className="absolute right-0 mt-14"/>
                </div> 
                <div className="relative col-span-4">
                    <h1 className="text-gray-500b text-center md:text-left text-2xl md:text-3xl font-semibold px-12 mt-12">RiceApps</h1>
                    <p className="flex md:text-xl py-5 px-12 justify-end">RiceApps is a student-run organization dedicated to solving challenging problems with technology. Students work in small teams and apply industry-standard methods and technologies to build digital products supporting local non-profit organizations and the Rice community. Applications open each fall.</p>
                </div>
                <div className="relative col-span-1">
                    <img src={csio_logo} alt="Logo" width="100px" className="absolute right-0 mt-14"/>
                </div> 
                <div className="relative col-span-4">
                    <h1 className="text-gray-500b text-center md:text-left text-2xl md:text-3xl font-semibold px-12 mt-12">CS I/O</h1>
                    <p className="flex md:text-xl py-5 px-12 justify-end">The CS I/O committee is a small group of undergraduate students that work to maintain an open line of communication between the Rice student body and the Computer Science Department. The committee works on gathering and presenting student feedback to the CS department as well as keeping students informed on department offerings and initiatives.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SubsidiariesPage