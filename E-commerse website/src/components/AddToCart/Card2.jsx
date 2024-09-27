import React from 'react'

function Card({image,title,desc,price}) {
  return (
    <div className='w-screen h-auto flex justify-center items-center pt-3'>
            <div className=' sm:w-[60%] w-90% grid grid-cols-12  gap-2 border-gray-600 border-2 p-3 rounded-2xl shadow-lg shadow-slate-400 '>
                <div className=' col-span-3'>
                    <img  src={image} alt="T-shirt" className='w-[80%] '  />
                    <label htmlFor="Quantity">Quantity</label>
                    <select className='w-[full]' name="Quantity" id="Quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className=' flex flex-col gap-2 col-span-5'>
                    <h4 className='font-medium text-lg'>{title}</h4>
                   <p>{desc} </p>
                   <p className='font-medium text-lg' >
                    Rs:{price}rs
                   </p>
                </div >
                <div className='col-span-4 grid gap-3 mx-10 my-3'>
                <button className='py-3 px-2 text-gray-50 bg-red-700 rounded-md'>Remove</button>
                <button className='py-3 px-2 text-gray-50 bg-green-700  rounded-md'>Buy</button>
            </div>
            </div>
            
        </div>
  )
}

export default Card