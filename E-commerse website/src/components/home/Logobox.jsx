import React from 'react'

function Logobox({logoName,logoImage}) {
  return (
    <div className="max-w-full flex flex-col items-center shadow-lg shadow-slate-700 rounded-sm py-3 px-2">

            <img src={logoImage}
             alt="free shipping"/>
            <h6 className="bg-[#E3E6F3] mt-2 px-2 py-1 font-medium rounded-sm">{logoName}</h6>
        </div>
    
  )
}

export default Logobox