import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import Items from './components/Items'
import Login from './components/Login'

const AppRouter = () => {
	return (
		<Router>
      <Route path='/' exact component={Home} />
      <Route path='/users/' component={Users} />
      <Route path='/items/' component={Items} />
      <Route path='/login/' component={Login} />
		</Router>
	)
}

export default AppRouter
