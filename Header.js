import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [{basket},dispatch] = useStateValue()
  return (
      <div className='header'>
          <Link to='/'>
              <img className='header_logo' src='https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png' alt='' />
            </Link>
          <div className='header_location'>
              <span>Kenya</span>
              <LocationOnIcon />
          </div>
          <div className='header_input'>
              <ExpandMoreIcon className='header_expandIcon'/>
              <input className='header_searchInput' type='text' placeholder='' />
              <SearchIcon className='header_searchIcon'/>
          </div>
          <div className='header_right'>
              <div className='header_option'>
                  <span className='header_optionLineOne'>Hello</span>
                  <Link to='login'>
                  <span className='header_optionLineTwo'>Sign In</span></Link>
                  </div>
                  <div className='header_option'>
                  <span className='header_optionLineOne'>Returns</span><span className='header_optionLineTwo'>& Orders</span>
                  </div>
                  <div className='header_option'>
                  <span className='header_optionLineOne'>Your</span><span className='header_optionLineTwo'>Prime</span>
              </div>
             
              <div className='shopping_cart'>
                   <Link to='checkout'>
                      <ShoppingCartIcon />
                    </Link>
                      <span>{ basket.length}</span>
                  </div>

          </div>
    </div>
  )
}

export default Header