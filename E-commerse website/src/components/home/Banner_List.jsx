import React from 'react'
import banner1 from '../../assets/Banner/b4.jpg'
import banner2 from '../../assets/Banner/b7.jpg'
import banner3 from '../../assets/Banner/b18.jpg'

import Banner from './Banner'

function Banner_List() {
    const BannerData=[
        {
            image:banner1,
            BannerTitle :"Seasion Sale",
            Discount:"Winter Collectio-50% off"
        },
        {
            image:banner2,
            BannerTitle :"New Footwear Collection",
            Discount:"Spring/Summer 2024"
        },
        {
            image:banner3,
            BannerTitle :"T-shirt",
            Discount:"New Trendy shirt"
        },
        
    ]
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 place-content-center px-10  text-white gap-5">

      {
       BannerData.map((item,index)=><Banner key={index} image={item.image} BannerTitle= {item.BannerTitle} Discount={item.Discount} />)
      }

    </div>
    
  )
}

export default Banner_List