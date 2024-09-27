import React from 'react'
import Header from '../components/Header';
import Hero from '../components/shop/Hero';
import NewsBar from '../components/NewsBar';
import CardList from '../components/home/CardList'
import Footer from '../components/Footer'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Shop({HomeCardData1,HomeCardData2}) {
  return (
    <div>
      <Header/>
      <Hero/>
      <CardList HomeCardData={HomeCardData1}/>
      <CardList HomeCardData={HomeCardData2}/>
       <div className="my-14 flex justify-center gap-2">
       
        <button className="px-3 py-1 bg-green-500 text-white">1</button>
        <button className="px-3 py-1 bg-green-500 text-white">2</button>
        <button className="px-3 py-1 bg-green-500 text-white">3</button>
        <button className="px-1 py-1 bg-green-500 text-white"> <FaArrowAltCircleRight/> </button>
        </div>
      <NewsBar/>
      <Footer/>
    </div>
  )
}

export default Shop;