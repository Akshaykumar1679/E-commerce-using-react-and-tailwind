import React from 'react'
import Header from '../components/Header'
import Hero_section_home from '../components/home/Hero_section_home'
import List_logobox from '../components/home/List_logobox'
import Feature from '../components/Feature'
import CardList from '../components/home/CardList'
import Footer from '../components/Footer'
import Banner_List from '../components/home/Banner_List'
import BannerImage1 from '../assets/Banner/b10.jpg'
import BannerImage2 from '../assets/Banner/b17.jpg'
import NewsBar from '../components/NewsBar'







function Home({Logodata,HomeCardData1,HomeCardData2}) {
  return (
    <div className='h-full'>
        <Header/>
        <Hero_section_home/>
        <List_logobox  Logodata={Logodata}  />
        <Feature/>
        
        <CardList HomeCardData={HomeCardData1}/>
        <div className="w-screen flex flex-col items-center text-slate-50 bg-slate-800 mt-14 mb-2 shadow-md shadow-gray-700">
            <h3 className="text-xl font-semibold mt-5 ">Repair Service</h3>
            <h1 className="text-5xl font-bold py-4">Up to <strong className="text-red-700">70% off</strong> -All t-shirt & Accessories</h1>
            <button className="mb-5 px-3 py-2 bg-teal-700 rounded-md">Explore More</button>
        </div>
        <div className="w-screen flex flex-col gap-2 items-center mt-10">
            <h1 className="text-6xl font-bold ">New Arrivals</h1>
            <p className="text-slate-700 text-xl py-4">Summer Collection New Modern Design</p>
        </div>
        <CardList HomeCardData={HomeCardData2}/>

        <div className="flex justify-center items-center flex-wrap my-10 gap-10 text-slate-50">
            <div className="  md:w-[45vw] w-[90vw] h-[40vh] bg-no-repeat py-[15vh] pl-5 bg-cover bg-[top_right_-3rem] sm:bg-[top]  " style={{backgroundImage:`url(${BannerImage1})`}}>
                <p className="text-lg ">crazy deals</p>
                <h1 className="text-4xl py-2">buy 1 get 1 free</h1>
                <p className="text-lg pb-2">classic dress on sale at cara</p>
                <button className="px-3 py-1 bg-slate-700 rounded">Learn more </button>
            </div>
            <div className=" w-[90vw] md:w-[45vw] h-[40vh] pl-5 py-[15vh]  bg-no-repeat bg-cover " style={{backgroundImage:`url(${BannerImage2})`}}>
                <p className="text-lg ">spring/summer</p>
                <h1 className="text-4xl py-2">Upcomming season</h1>
                <p className="text-lg pb-2">classic dress on sale at cara</p>
                <button className="px-3 py-1 bg-slate-700 rounded">Collection </button>
            </div>
        </div>
        
        <Banner_List />
        <NewsBar/>

        <Footer/>
        <div className="text-center py-6">
        <p className="text-base font-medium text-slate-700">© 2024 Cara is a registered trademark. All Rights Reserved.</p>
    </div>  
    
    </div>
  )
}

export default Home;