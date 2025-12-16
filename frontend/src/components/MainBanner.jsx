import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
    return (
        <div className='relative '>
            <img src={assets.main_banner_bg} alt="Main Banner" className='w-full hidden md:block' />
            <img src={assets.main_banner_bg_sm} alt="Main Banner" className='w-full hidden md:hidden' />
            <div>
                <h1>Freshness You Can , Saving You Will Love!</h1>
            </div>
            <div className='flex flex-col '>
                <Link to="/products" className='p-4 mx-2  w-36 rounded-xl bg-primary/20 h-auto border border-black '>{"Shop Now -->"}</Link>
                <Link to="/products" className='p-4 mx-2 w-36 rounded-xl bg-primary/20 h-auto border border-black '>{"Explore -->"}</Link>
            </div>
        </div>
    )
}

export default MainBanner