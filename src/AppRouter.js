import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import Items from './components/Items'
import Signup from './components/Signup'
import PlaceholderSignup from './components/PlaceholderSignup'

const AppRouter = () => {
	return (
		<Router>
      <Route path='/' exact component={Home} />
      <Route path='/users/' component={Users} />
      <Route path='/items/' component={Items} />
      <Route path='/login/' component={Signup} />
      <Route path='/placeholder/' component={PlaceholderSignup} />
		</Router>
	)
}

export default AppRouter
