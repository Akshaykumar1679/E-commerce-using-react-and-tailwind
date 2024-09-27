import React from 'react'
import contact from '../../assets/contact/contact1.jpg'

function Hero() {
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover flex  justify-center items-center mt-10 flex-col gap-5 md:items-start pl-20 z-10 brightness-75 shadow" style={{backgroundImage:`URL(${contact})`}} >
    <h1 className="text-white text-6xl font-bold text-opacity-100 " >Get In Touch</h1>
    <p className=" text-white text-2xl font-normal text-opacity-100">The Ultimate Guide To Our Best Product</p>
 </div>
  )
}

export default Hero;