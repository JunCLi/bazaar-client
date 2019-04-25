import React, { useState } from 'react'

// import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'

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
        {loginTab === 0 && <Signup />}
        {loginTab === 1 && <Login />}
      </section>
    </main>
  )
}

export default SignupAndLogin