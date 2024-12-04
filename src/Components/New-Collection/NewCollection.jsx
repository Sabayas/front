import React from 'react'
import '../New-Collection/NewCollection.css'
import new_collection from'../Assets/new_collections'
import Item from '../Item/Item.jsx'

const NewCollection = () => {
  return (
    <div className='collection'>
      <h1>New Collection</h1>
      <hr />
      <div className="collection-item">
        {new_collection.map((item, i)=> {
          return <Item key ={i} id ={item.id} name ={item.name} image ={item.image}  new_price = {item.new_price} old_price ={item.old_price} />
        })}
      
      </div>
    </div>
  )
}

export default NewCollection
