import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core';

import Navbar from './Navbar'

import '../css/home.css'
import HomeRecentItems from './HomeRecentItems';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <header className='home-banner' >
        <div className='container'>
          <div className='banner-text'>
            <h1>Welcome to Bazaar</h1>
            <p className='slogan'>The leading source for <span>absolutely</span> everything in the world.</p>
            <p className='slogan'>Trust me.</p>
            <Link to='/items/'>
              <Button className='btn-shop-now' variant='contained' color='secondary'>Shop Now</Button>
            </Link>
          </div>

          <div className='banner-image'>
          </div>
          
        </div>
      </header>

      <HomeRecentItems />
    </div>
  )
}

export default Home