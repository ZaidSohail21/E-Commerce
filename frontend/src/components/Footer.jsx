import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:wd-2/3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sequi velit alias. Omnis ea assumenda inventore asperiores impedit, deserunt dolores ipsum doloremque nesciunt eius earum placeat corrupti, possimus, vitae nemo fugiat! Provident debitis nulla minus voluptatem suscipit numquam deleniti tempore.
          </p>

        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className='text-ul font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7891</li>
            <li>contact@forervergmail.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Contactright 2025@ forever.com - All Right Reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
