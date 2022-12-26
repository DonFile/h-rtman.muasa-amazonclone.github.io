import React from 'react'
import './Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProcuct from './CheckoutProcuct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const [{basket},dispatch] = useStateValue()
  return (
      <div className='checkout'>
          {/* checkoutLeft */}
          <div className='checkout_left'>
              <img className='checkout_add' src='https://blog.wishpond.com/wp-content/uploads/2021/07/CTA-BLOG-BANNERS-4.jpg' alt='' />
              <div className=''>
                  {/* <h3>Hello,{ user?.email}</h3> */}
                  <h2 className='checkout_title'>Your shopping Basket</h2>
                  {basket.map(item => (
                      <CheckoutProcuct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                      />   
                  ))} 
              </div>
          </div>
          {/* checkoutRight */}
          <div className='checkout_right'>
              <Subtotal/>
          </div>
    </div>
  )
}

export default Checkout 