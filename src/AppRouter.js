import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import Items from './components/Items'
import AddItem from './components/AddItem'
import SignupAndLogin from './components/SignupAndLogin'

const AppRouter = () => {
	return (
		<Router>
         <Route path='/' exact component={Home} />
         <Route path='/users/' component={Users} />
         <Route path='/items/' component={Items} />
         <Route path='/add-item' component={AddItem} />
         <Route path='/login/' component={SignupAndLogin} />
		</Router>
	)
}

export default AppRouter
