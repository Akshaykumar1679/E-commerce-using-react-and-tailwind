import React from 'react'
import Card from '../Card'

function CardList({HomeCardData}) {
  return (
    <div  className=" w-screen xl:px-24 lg:px-10 px-4 pt-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 ">
    {
        HomeCardData.map((item)=><Card CartImage={item.CartImage} CartTitle={item.CartTitle} CartDescription={item.CartDescription} />)
    }
    </div>
  )
}

export default CardList