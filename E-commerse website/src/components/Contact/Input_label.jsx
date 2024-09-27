import React from 'react'

function Input_label ({placeholder,id,labelFor,labelName}) {
  return (
   <div className="flex flex-col w-full md:py-5">
     <label className="text-lg font-semibold " htmlFor= {labelFor}>{labelName}</label>
     <input className=" border-2 p-2 rounded-lg pt-2 bg-[rgba(255,255,255,0.3)]" type="text" placeholder={placeholder} id=
    {id}/>
   </div>
    
  )
}

export default Input_label