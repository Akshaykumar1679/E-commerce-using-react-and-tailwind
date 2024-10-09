import React from 'react'
import { Outlet } from 'react-router-dom'
import image from '../../assets/contact/contact1.jpg'

function Layout() {
  return (
    <div className='w-screen h-[100vh] flex items-center gap-2 '>
    <div className='hidden sm:flex items-center justify-center w-[50%] px-5 h-full text-white bg-slate-950  bg-no-repeat bg-cover' style={{backgroundImage:`URL(${image})`}}>
        <h1 className='text-4xl font-bold '>Welcome to Ecommerce Shopping</h1>
    </div>
    <div className='flex items-center lg:px-5 sm:w-[50%] w-full justify-center px-2 '>
     <Outlet/>

    </div>


    </div>
  )
}

export default Layout