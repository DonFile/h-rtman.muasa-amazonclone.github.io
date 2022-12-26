import React from 'react'
import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <div className='nav'>
          <div className='nav_menu'>
              <MenuIcon />
              <span>All</span>
          </div>
          <div className='nav_links'>
              <div className='nav_linkOption'>
              <Link>Today's Deals</Link>
              </div>
              <div className='nav_linkOption'>
                  <Link>Customer Service</Link>
              </div>
              <div className='nav_linkOption'>
                  <Link>Gift Cards</Link>
              </div>
              <div className='nav_linkOption'>
                  <Link to='signup'>Registry</Link>
              </div>
              <div className='nav_linkOption'>
                  <Link>Sell</Link>
              </div>
          </div>
    </div>
  )
}

export default Nav