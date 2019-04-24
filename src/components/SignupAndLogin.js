import React, { useState } from 'react'

// import Button from '@material-ui/core/Button'
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Navbar from './Navbar'
import Signup from './Signup'

const SignupAndLogin = () => {
  const [loginTab, setLoginTab] = useState(0)

  const handleLoginTabChange = (event, value) => {
    setLoginTab(value)
  }

  return (
    <main>
      <Navbar/>
      <section className="signup">
        <Tabs
          value={loginTab}
          indicatorColor='primary'
          variant='fullWidth'
          onChange={handleLoginTabChange}
        >
          <Tab label='Sign Up' className='login-form-tab' />
          <Tab label='Log In' className='login-form-tab' />
        </Tabs> 
        <SwipeableViews 
        >
         <Signup />
         <Signup />
        </SwipeableViews>
      </section>
    </main>
  )
}

export default SignupAndLogin