import React from "react";
import Header from "../components/Header";
import Hero from "../components/About/Hero";
import image1 from "../assets/Banner/aboutCard.jpg";
import video from "../assets/contact/1.mp4";
import List_logobox from "../components/home/List_logobox";
import Footer from "../components/Footer";
import NewsBar from "../components/NewsBar";

function About({Logodata}) {
  return (
    <div>
      <Header />
      <Hero />
      <div className="w-screen flex justify-center items-center">
        <div className="mt-16 lg:max-w-[1300px] flex justify-center gap-8 w-[95vw] flex-col md:flex-row ">
          <div className="md:w-[50%] w-full">
            <img className="w-full h-full bg-cover bg" src={image1} alt="image" />
          </div>
          <div className="md:w-[50%] w-full">
            <h1 className="text-4xl font-bold pt-8">Who We Are?</h1>
            <p className="text-xl pt-5  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              nostrum, omnis adipisci nobis provident deleniti! Quia pariatur
              porro, itaque dolorem natus quam eveniet commodi veritatis sit,
              magnam illo assumenda vel Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni dolor maiores cum quos sint quam magnam
              dolorum quia nihil inventore quis tenetur id delectus esse eveniet
              alias neque, laborum asperiores!
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center flex-col pt-8">
        <div className="text-center mb-5">
          <h1 className="text-6xl  font-bold">Download Our App</h1>
        </div>
        <div className="md:max-w-[800px] h-full w-[95vw] ">
          <video className="w-full h-full" autoPlay muted loop controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <List_logobox  Logodata={Logodata}  />
      <NewsBar/>
      <Footer/>
    </div>
  );
}

export default About;
