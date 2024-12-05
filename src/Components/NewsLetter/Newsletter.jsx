import React from 'react'
import '../NewsLetter/Newsletter.css'

const Newsletter = () => {
  return (
    <>
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        
        <div className='newsletter-div'>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
        </div>
        </div>
    </>
  )
}

export default Newsletter
