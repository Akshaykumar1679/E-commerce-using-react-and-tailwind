import React from 'react'
import hero from '../../assets/homeimage/hero4.png';
import button from '../../assets/homeimage/button.png'
function Hero_section_home() {
  return (
    <div><div className="w-screen h-screen   flex items-center md:bg-top  bg-[top_right_-17rem]" style={{ backgroundImage: `url(${hero})` }}>
    <div className=" md:ml-16 ml-3">
        <h4 className="text-xl font-semibold my-3">Trade-In-Offer</h4>
        <h1 className="text-6xl font-bold my-3 text-slate-400">Supper Value Deals</h1>
        <h2 className="text-xl my-3 mt-3 font-semibold">On all product</h2>
        <p className="my-3 text-lg text-slate-600 ">Save more with coupun & up to 70% off!</p>
        <button className=" my-4 w-full  font-bold text-lg  bg-no-repeat bg-[top_right_10rem]  text-[#088178] px-3 py-1 " style={{ backgroundImage: `url(${button})` }}>Shop now</button>
    </div>
</div></div>
  )
}

export default Hero_section_home