import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque numquam quam eum ratione quibusdam tenetur nam debitis veritatis delectus rerum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam et, excepturi blanditiis odit repellat.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusantium!</p>
        </div>
      </div>
    </div>
  )
}

export default About
