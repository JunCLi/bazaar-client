import React from 'react'

import { Link } from 'react-router-dom'

import { Query } from 'react-apollo'
import { getLoggedUser } from '../graphql-queries/queries'

import { AppBar, Button } from '@material-ui/core'

import '../css/navigation.css'

const NavBar = () => {
	return (
		<Query query={ getLoggedUser }>
			{({loading, err, data}) => {
				if (loading || err) return (
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
					</nav>
				)

				return (
					<nav >
						<AppBar className='primary-navigation' position='static' color='primary'>
							<div className='container'>
								<Link to='/'>
									<Button className='nav-home' color='inherit'>Bazaar</Button>
								</Link>

								{ data.getLoggedUser ? 
									<Link to='/profile/'>
										<Button className='login' color='inherit'>Welcome, {data.getLoggedUser.fullname}</Button>
									</Link> :
									<Link to='/login/'>
										<Button className='login' color='inherit'>Login</Button>
									</Link>
								}
							</div>
		
						</AppBar>
					</nav>
				)
			}}
		</Query>
	)
}

export default NavBar
