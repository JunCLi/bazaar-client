import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import Items from './components/Items'
import AddItem from './components/AddItem'
import SignupAndLogin from './components/SignupAndLogin'
import DetailedItem from './components/DetailedItem'

const AppRouter = () => {

	return (
		<Router>
			<Route path='/' exact component={Home} />
			<Route path='/user/:userId' component={Profile} />
			<Route path='/items/' component={Items} />
			<Route path='/add-item' component={AddItem} />
			<Route path='/login/' component={SignupAndLogin} />
			<Route path='/item/:itemId' component={DetailedItem} />
		</Router>
	)
}

export default AppRouter
