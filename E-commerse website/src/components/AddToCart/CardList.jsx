import React, { useContext } from 'react'
import Card2 from './Card2'
import CardContext from '../../store/CartContext'

function CardList() {
const {cart } = useContext(CardContext)
  return (
    <div>
        {
            cart.map((item,index)=><Card2 key={index}  image={item.image} title={item.productName} desc={item.description} price={item. price}  />)
        }
    </div>
  )
}

export default CardList