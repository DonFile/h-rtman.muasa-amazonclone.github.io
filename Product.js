import React from 'react'
import './product.css'
import { useStateValue } from '../StateProvider'

const Product = ({ title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue()
  
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      // id: id,
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
  };
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{ title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{ price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map((_,i)=>(<p>*</p>))}
          </div>
      </div>
      <img  className='product_img' src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product