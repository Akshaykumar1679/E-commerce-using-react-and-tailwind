import React from 'react'
import b1 from '../../assets/Banner/b1.jpg'

function Hero() {
  return (
    <div className="w-screen h-[60vh] bg-[url('./asset/b1.jpg')] flex items-center justify-center bg-cover  " style={{backgroundImage:`url(${b1})`}}>
        <div className=" md:ml-16 ml-3">
            
            <h1 className="text-6xl font-bold my-3 text-white text-center">#Stayhome</h1>
        
            <p className="my-3 text-2xl text-white ">Save more with coupun & up to 70% off!</p>
            
        </div>
    </div>
  )
}

export default Hero;