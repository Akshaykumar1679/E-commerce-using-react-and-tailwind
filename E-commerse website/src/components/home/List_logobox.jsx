import React from 'react'
import Logobox from './Logobox'





function List_logobox({Logodata}) {
  return (
    <div className="w-screen grid place-content-center">
    <div className=" max-w-[1200px] grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6 py-16 text-base text-[#088178]">
       {
          Logodata.map((item)=><Logobox logoName={item.logoName} logoImage={item.logoImage}/>)
       }


    </div>
</div>
  )
}

export default List_logobox