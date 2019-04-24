import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import Items from './components/Items'
import Login from './components/Login'

import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const AppRouter = () => {
	return (
		<Router>
			<nav>
        <Link to='/'>Home</Link>
        <Link to='/users/'>Users</Link>
        <Link to='/items/'>Items</Link>
        <Link to='/login/'>Login</Link>
			</nav>
      <Route path='/' exact component={Home} />
      <Route path='/users/' component={Users} />
      <Route path='/items/' component={Items} />
      <Route path='/login/' component={Login} />

		</Router>
	)
}

export default AppRouter
