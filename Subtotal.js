import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { useNavigate } from 'react-router'
import { getBasketTotal } from '../reducer'


const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue()
    const navigate = useNavigate()
  return (
      <div className='subtotal'>
          <CurrencyFormat renderText={(value) => (
              <>
                  <p>Subtotal({basket.length} items):<strong>{ value}</strong></p>
                  <small className='subtotal_gift'>
                      <input type='checkbox' />This order contains a gift
                  </small>
              </>
          )} decimalScale={2} value={getBasketTotal(basket)}
              displayType={'text'} thousandSeparator={true} prefix={'$'} />
          <button onClick={e=>navigate('/login')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal