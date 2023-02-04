import React, {  useEffect, useState } from 'react'
import loaderSrc from '../assets/imgs/loader.gif'
import { useLottie } from "lottie-react";
import animationData from '../assets/animation/homepage-bitcoin.json'
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData    
    }
   const { View } = useLottie(defaultOptions);
    
    
if(isLoading) return(<img className='loader' src={loaderSrc} alt="loader" />)
  return (
    <div className='home-page'>
       <div className="btc-animation">
        {View}
       </div>
       <Link className='link' to="/login">Login</Link>
         
    </div>
  )
}
