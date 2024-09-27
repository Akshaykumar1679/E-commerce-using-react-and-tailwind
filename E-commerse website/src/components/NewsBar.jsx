import React from 'react'

function NewsBar() {
  return (
    <div className="md:flex justify-between py-9 bg-[#9c3ac0] my-10 px-5 " >
    <div className="">
        <h1 className="font-bold text-5xl text-white p-3 ">Sign Up For Newsletters</h1>
        <p className="text-gray-50 p-3">Get E-mail update about our latest shops and special offer</p>
     </div>
     <div className="flex  flex-wrap justify-center items-center gap-2 ">
         <input className=" h-10 px-3" type="text" id="signin1" placeholder="Your email address"/>
         <label className=" h-10 text-center pt-2 px-3 bg-cyan-900 text-white " htmlFor="signin1">Sign Up</label>
     </div>
 </div>
  )
}

export default NewsBar