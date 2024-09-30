import React, { useContext } from 'react'
import CardContext from '../../store/CartContext'
import { LuIndianRupee } from "react-icons/lu";

function Card2({image,title,desc,price}) {
    const {handleRemoveCart}=useContext(CardContext)
  return (
    <div className='w-screen h-auto flex justify-center items-center pt-3'>
            <div className=' sm:w-[60%] w-85% grid grid-cols-12  gap-2 border-gray-600 border-2 sm:p-3 py-2 px-1 rounded-2xl shadow-lg shadow-slate-400 '>
                <div className='col-span-5 sm:col-span-3 flex sm:block'>
                    <img  src={image} alt="T-shirt" className='w-[40%] '  />
                    <div>
                    <label htmlFor="Quantity">Quantity</label>
                    <select className='w-[full]' name="Quantity" id="Quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                </div>
                <div className=' flex flex-col gap-2 col-span-5 sm:col-span-7'>
                    <h4 className='font-medium text-lg'>{title}</h4>
                   <p>{desc} </p>
                   <p className='font-medium text-lg flex items-center' >
                    <LuIndianRupee/>{price}
                   </p>
                </div >
                <div className='col-span-2 grid gap-3  '>
                <div><button className=' py-3 text-gray-50 bg-red-700 rounded-md w-full' onClick={()=>{handleRemoveCart(image,price)}}>Remove</button></div>
            <div>    <button className=' py-3 text-gray-50 bg-green-700 w-full rounded-md'>Buy</button></div>
            </div>
            </div>
            
        </div>
  )
}

export default Card2