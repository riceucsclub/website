import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
// import blue_gradient from '../../Files/blue_gradient.svg'
// import gray_gradient from '../../Files/gradient1.svg'
// import triangles from '../../Files/Triangles.svg'
import OfficerGallery from "./About_Components/OfficerGallery";

function AboutPage() {
  const [activeTag, setActiveTag] = useState("");
  const tabs = ["About", "Resources", "Events", "Subsidiaries", "Contact"];
  let text = "";

  return (
    <div className="relative">
      <Header />

      <div className="relative z-10 text-rice-blue text-center font-bold text-4xl lg:text-5xl laptop-l:text-6xl pt-100px mb-6">
        Welcome to the Rice CS Club!
      </div>
      <div class="flex flex-col md:flex-row justify-center">
        <a
          className="flex justify-center py-1 m-2"
          href="https://docs.google.com/document/d/15nBECgAnR3ZiHaNqSZV-4NDMksp5aBd6aceaykslgeI/edit?usp=sharing"
          target="_blank"
        >
          <button class="bg-rice-blue hover:bg-gull-gray text-white py-2 px-4 rounded-full">
            View our constitution here!
          </button>
        </a>
        {/* <a className="flex justify-center py-1 m-2" href= 'http://eepurl.com/gBMAdr' target="_blank">
          <button class="bg-rice-blue hover:bg-gull-gray text-white py-2 px-4 rounded-full">Join our mailing list here!</button>
        </a> */}
      </div>
      <h1 className="flex text-gray-500b justify-center text-2xl mt-8 font-semibold justify-start">
        2021-2022 Officers
      </h1>
      <div class="relative mb-8 z-10 justify-center">
        <OfficerGallery />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
