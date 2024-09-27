import React from 'react'
import LabelInput from '../components/Login/LabelInput'
import { FaFacebookSquare,FaTwitter,FaGoogle } from "react-icons/fa";


function LogIn() {
  return (
    <div className="w-screen h-screen flex justify-center items-center  " style={{
        backgroundColor: '#00DBDE',
        backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
      }}
    >
        <div className="lg:w-[40vw] w-[90vw] md:p-10 p-3 shadow-md rounded-sm shadow-slate-400 bg-slate-700 text-white flex items-center flex-col gap-10">
          <h1 className="font-bold text-4xl ">Login</h1>
          <div className="flex flex-col gap-2 w-full px-10">
           
           
               <LabelInput placeholder={"Enter your username "} id={"name"} labelName={"UserName"} labelFor={"name"} />
               <LabelInput placeholder={"Enter your password "} id={"password"} labelName={"password"} labelFor={"password"} />
              
              
           <p className="text-end text-sm">Forgot password?</p>
          </div>
          <button className="rounded-full bg-slate-500 text-white font-bold p-2 w-80" >LOGIN</button>
          <div className="flex flex-col items-center">
          <p>Or SignUp Using</p>
           
           <div className="flex  gap-3 text-2xl ">
               <a  href="facebook.com" className=' pt-2'><FaFacebookSquare/></a>
           <a href="" className=' pt-2'><FaTwitter/></a>
           <a href="" className=' pt-2'><FaGoogle/></a>
           </div>
          </div>
          <button 
          className="rounded-full bg-slate-500 text-white font-bold p-2 w-80"  >SignUp</button>
        </div>
      </div>
    
  )
}

export default LogIn