import React from 'react'


function Banner({image,BannerTitle,Discount}) {
  return (
    <div className="bg-[url('./asset/b7.jpg')]  pl-4 md:w-full flex justify-center gap-3 flex-col min-h-[30vh] w-[95vw] bg-no-repeat bg-cover bg-left" style={{backgroundImage:`url(${image})`}}>
                <h1 className="text-4xl font-semibold">
                    {BannerTitle}</h1>
                <p className="font-medium text-lg text-slate-800">
                    {Discount}
                </p>
            </div>
    
  )
}

export default Banner