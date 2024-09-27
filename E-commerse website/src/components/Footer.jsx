import React from 'react'
import image1 from '../assets/homeimage/logo.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa"

function Footer() {
  return (
    <div className="grid md:grid-cols-4  sm:grid-cols-2 gap-5 sm:justify-items-center pl-10 sm:pl-0">
    <div className="flex flex-col gap-3 ">
        <img className="w-40" src={image1} alt=" caralogo"/>
        <p className="font-semibold text-xl text-sky-800">Contact</p>
        <div>
            <p>Address:Sector 67 Mohali</p>
            <p>Phone:+91-95047940</p>
            <p>Hour:10:00-18:00 mon-sat</p>
        </div>
        <p className="font-semibold text-xl text-sky-800">Follow Us</p>
        <div className="flex gap-2">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
    </div>
    <div className="flex flex-col gap-3 ">
        <p className="font-semibold text-xl text-sky-800">About</p>
        <div>
            <p className="font-medium text-slate-800 ">About Us </p>
            <p className="font-medium text-slate-800 ">Delivery Information </p>
            <p className="font-medium text-slate-800 ">Privacy Policy </p>
            <p className="font-medium text-slate-800 ">Terms & Conditions </p>
            <p className="font-medium text-slate-800 ">Contact Us </p>
        </div>
    </div>
    <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl text-sky-800">My Account</p>
        <div>
            <p className="font-medium text-slate-800 ">Sign In </p>
            <p className="font-medium text-slate-800 ">View Cart </p>
            <p className="font-medium text-slate-800 ">My Wishlist</p>
            <p className="font-medium text-slate-800 ">Track My Order</p>
            <p className="font-medium text-slate-800 ">help </p>
        </div>
    </div>
    <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl text-sky-800">Install App</p>
        <p>For App Store & Google Pay</p>
        <div className="flex flex-wrap gap-2 justify-center">
            
           <div className='text-4xl py-5 px-10 border-slate-400 shadow-md shadow-slate-400 text-red-500'> <FaGooglePlay /></div>
            <div className='text-4xl py-5 px-10 border-slate-400 shadow-md shadow-slate-400 text-red-500'><FaGooglePay /> </div>
        </div>
        </div>
      
</div>
    
  )
}

export default Footer