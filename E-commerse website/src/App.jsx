import Home from './pages/Home'
import image1 from './assets/feacher product/f1.png'
import image2 from './assets/feacher product/f2.png'
import image3 from './assets/feacher product/f3.png'
import image4 from './assets/feacher product/f4.png'
import image5 from './assets/feacher product/f5.png'
import image6 from './assets/feacher product/f6.png'
import homecart1 from "./assets/feacher product/f1.jpg"
import homecart2 from "./assets/feacher product/f2.jpg"
import homecart3 from "./assets/feacher product/f3.jpg"
import homecart4 from "./assets/feacher product/f4.jpg"
import homecart5 from "./assets/feacher product/f5.jpg"
import homecart6 from "./assets/feacher product/f6.jpg"
import homecart7 from "./assets/feacher product/f7.jpg"
import homecart8 from "./assets/feacher product/f8.jpg"
import homecart9 from "./assets/feacher product/n1.jpg"
import homecart10 from "./assets/feacher product/n2.jpg"
import homecart11 from "./assets/feacher product/n3.jpg"
import homecart12 from "./assets/feacher product/n4.jpg"
import homecart13 from "./assets/feacher product/n5.jpg"
import homecart14 from "./assets/feacher product/n6.jpg"
import homecart15 from "./assets/feacher product/n7.jpg"
import homecart16 from "./assets/feacher product/n8.jpg"
import Shop from './pages/shop'
import About from './pages/About'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import Signup from './pages/Signup'
import AddToCart from './pages/AddToCart'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter} from 'react-router-dom';
import { useState } from 'react'



const Logodata = [
  {
    logoName: "Free shipping",
    logoImage: image1,
  },
  {
    logoName: "Online Order",
    logoImage: image2,
  },
  {
    logoName: "Save Money",
    logoImage: image3,
  },
  {
    logoName: "Promotions",
    logoImage: image4,
  },
  {
    logoName: "Happy Sell",
    logoImage: image5,
  },
  {
    logoName: "F24/7 support",
    logoImage: image6,
  },

];
const HomeCardData1=[
  {
    CartImage:homecart1,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart2,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart3,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart4,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart5,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart6,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart7,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart8,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
]
const HomeCardData2=[
  {
    CartImage:homecart9,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart10,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart11,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart12,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart13,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart14,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart15,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
  {
    CartImage:homecart16,
    CartTitle:"addidas",
    CartDescription:"Cartoon Astronaut T-shirt"
  },
]
const cart1=[
  {
    image:image1,
    productName:"akshay",
    description:"hello my name is akshay",
    price:"200"
  },
  {
    image:image1,
    productName:"akshay",
    description:"hello my name is akshay",
    price:"200"
  },
  {
    image:image1,
    productName:"akshay",
    description:"hello my name is akshay",
    price:"200"
  },
]



function App() {
  
  const [cart , setcart]=useState(cart1) 
  
  return (
    
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Home Logodata={Logodata} HomeCardData1={HomeCardData1} HomeCardData2={HomeCardData2} />} />
        <Route path="/shop" element={<Shop HomeCardData2={HomeCardData2} HomeCardData1={HomeCardData1} />} />
        <Route path="/about" element={<About Logodata={Logodata} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addTocart" element={<AddToCart cart={cart}  />} />
        <Route path="/login" element={< LogIn/>} />
        <Route path="/signup" element={< Signup/>} />
       
      </Routes>
</Router>
    
    </>
  )
}

export default App
