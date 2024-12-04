import React from 'react'
import '../NewsLetter/Newsletter.css'

const Newsletter = () => {
  return (
    <>
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
    </div>
    <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
    </div>
    </>
  )
}

export default Newsletter
