import React from "react";

import Hero from "../components/Contact/hero";
import Footer from "../components/Footer";

import ContactForm from "../components/Contact/ContactForm";
import Header from '../components/Header'


import { FaSquareTwitter,FaDiscord,FaYoutube,FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div>
  
      <Header/>

      <Hero />
      <div className="lg:relative w-screen lg:h-[70vh] flex justify-center text-white bg-sky-900">
        <div className="grid lg:grid-cols-6 lg:absolute py-5 top-[-200px] w-[80vw]  ">
          <div className="col-span-4 bg-slate-700 p-10 ">
            <div className=" flex justify-between items-center px-5 pb-5">
              <h1 className="text-white font-bold text-3xl">Send us a message</h1>
              <i className="fa-solid fa-envelope text-xl"></i>
            </div>
           <ContactForm/>
          </div>
          <div className="lg:col-span-2 bg-slate-600 h-full w-[80vw] lg:w-full pl-5 py-5 flex flex-col md:justify-between font-bold gap-10 ">
            <div>
              <h1 className=" text-3xl ">contact information</h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <i className="fa-solid fa-envelope text-3xl"></i>
              <p className="text-lg">support@ak1010help.in</p>
            </div>
            <div className="text-xl flex gap-2">
             
             <a href="https://www.Twitter.com/" target="_blank" rel="noopener noreferrer">
             <FaSquareTwitter/>
             </a>
             <a href="https://www.Discord.com/" target="_blank" rel="noopener noreferrer">
             <FaDiscord />
             </a>
             <a href="https://www.Youtube.com/" target="_blank" rel="noopener noreferrer">
             <FaYoutube/>
             </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
             </a>
               
              
            </div>
          </div>
        </div>
      </div>
    

      <Footer />
    </div>
  );
}

export default Contact;
