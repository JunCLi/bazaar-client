import React from 'react'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

import '../css/navigation.css'

const NavBar = () => {
	return (
		<nav >
			<AppBar className='primary-navigation' position='static' color='primary'>
				<div className='container'>
					<Link to='/'>
						<Button className='nav-home' color='inherit'>Bazaar</Button>
					</Link>

					<Link to='/login/'>
						<Button className='login' color='inherit'>Login</Button>
					</Link>

				</div>

			</AppBar>
			
				{/* 
				<Link to='/users/'>
					<Button color='inherit'>Users</Button>
				</Link>

				<Link to='/items/'>
					<Button color='inherit'>Items</Button>
				</Link>

				

				<Link to='/add-item/'>
					<Button color='inherit'>Add Item</Button>
				</Link> */}
			
		</nav>
	)
}
export default NavBar
