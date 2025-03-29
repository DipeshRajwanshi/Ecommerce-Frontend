import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-s w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab aliquid possimus officiis? Pariatur, neque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, praesentium! Facere laudantium unde excepturi inventore recusandae incidunt officia alias autem?
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@foeveryou.com</li>
                </ul>
            </div>

            
        </div>
        
        <div >
                <hr />
                <p className='text-center py-5 text-sm' >
                  Copyright 2024@ forever.com - All Right Reserved. 
                </p>
            </div>

    </div>
  )
}

export default Footer