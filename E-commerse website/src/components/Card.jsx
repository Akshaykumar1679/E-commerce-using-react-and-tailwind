import React from 'react'
import addToCard from '../assets/homeimage/add-to-cart-3046.png'
import AddToCartButton from './AddToCartButton'

function Card({CartImage,CartTitle,CartDescription}) {
  return (
    
    <div className="rounded-2xl shadow-lg shadow-slate-400  ">
                
    <img className="p-5 rounded-xl " src={CartImage} alt="image"/>

<div className="pl-5">
    <div>
        <p className="text-[#088178]">{CartTitle}</p>
        <h3 className="font-medium text-lg">
            {CartDescription}
        </h3>
    </div>
    <div className="flex justify-between text-lg">
        <span className="text-slate-700 font-semibold">78$</span>
      <AddToCartButton/>
    </div>
</div>
</div>
  )
}

export default Card