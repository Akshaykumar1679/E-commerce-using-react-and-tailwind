import React, { useContext } from 'react'
import Header from '../components/Header';

import CardList from '../components/AddToCart/CardList';
import CardContext from '../store/CartContext';

function AddToCart() {
  const {total}=useContext(CardContext)
  return (
    <div>
        <Header/>
        <br />
        <br />
        <br />
        <CardList    />

        <div className='w-screen flex justify-between bg-slate-500 h-[4rem] mt-3 items-center fixed bottom-5'>
          <p className=' ml-5 text-lg font-semibold text-white'>Total:{total}</p>
          <div><button className='mr-5 text-lg font-semibold py-2 px-4 rounded bg-blue-700 text-slate-50 '>BuyAll</button>
          </div>
        </div>
    </div>
  )
}

export default AddToCart;
