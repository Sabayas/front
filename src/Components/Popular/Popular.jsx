import React from 'react'
import './Popular.css'
import '../Assets/all_product.js'
import '../Assets/data.js'
import data_product from '../Assets/data.js'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <item key ={i} id ={item.id} name ={item.name} image ={item.image} new_price = {item.new} old_price ={item.old_price} />
            })}
           
        </div>
      
    </div>
  )
}

export default Popular