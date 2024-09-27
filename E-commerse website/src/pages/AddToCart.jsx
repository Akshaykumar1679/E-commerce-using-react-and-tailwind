import React from 'react'
import Header from '../components/Header';

import CardList from '../components/AddToCart/CardList';

function AddToCart({cart}) {
  return (
    <div>
        <Header/>
        <br />
        <br />
        <br />
        <CardList cart={cart}   />
    </div>
  )
}

export default AddToCart;
