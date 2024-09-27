import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare,FaTwitter,FaGoogle } from "react-icons/fa";

function Signup() {
  return (
    <div className="w-screen h-screen flex justify-center items-center  "
    style={{
        backgroundColor: '#00DBDE',
        backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
      }}
    >
        <div className=" md:w-[700px] w-[95vw] p-10 shadow-md rounded-sm shadow-slate-400 bg-white flex items-center flex-col gap-8">
          <h1 className="font-bold text-4xl ">SignUp</h1>
          <div className="flex flex-col gap-4 items-center w-full px-10">
           
               <input className="w-full border-b-2 border-b-slate-500 pb-1 pl-2 " type="text"  id="username" placeholder="First Name"/>
               <input className="w-full border-b-2 border-b-slate-500 pb-1 pl-2" type="text"  id="password" placeholder="Last Name"/>
               <input className="w-full border-b-2 border-b-slate-500 pb-1 pl-2 " type="text"  id="password" placeholder="Email"/>
               <input className="w-full border-b-2 border-b-slate-500 pb-1 pl-2 " type="password"  id="password" placeholder="Password"/>
           
           <p className=" text-sm">Already a member?<Link className="font-semibold" to="/login">Login</Link></p>
          </div>
          <button className="rounded-full bg-slate-500 text-white font-bold p-2 w-80">SignUp</button>
          <div className="flex flex-col items-center">
          <p>Or SignUp Using</p>
           
           <div className="flex  gap-3 text-2xl">
            
           <a  href="facebook.com" className=' pt-2'><FaFacebookSquare/></a>
           <a href="" className=' pt-2'><FaTwitter/></a>
           <a href="" className=' pt-2'><FaGoogle/></a>
           </div>
          </div>
       </div>
   </div>
   
   
   
  )
}

export default Signup