import React from 'react'
import '../Styles/Hero.css'
import heroimg from '../assets/joe-shields.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1>Hey! I'm Yash</h1>
            <h4>I am a Frontend Engineer</h4>
            <button className='btn'>Contact</button>
            <button className='btn-2'>About me</button>
        </div>
        
        <div className='hero-img'>
            <img src={heroimg} alt="image" />
        </div>
    </div>
  )
}

export default Hero