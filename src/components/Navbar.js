import React from 'react'

import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

const styles = {
	appbar: {
		justifyContent: 'center',
		flexFlow: 'row nowrap',
	},
}

const NavBar = props => {
	const { classes } = props
	return (
		<nav>
			<AppBar className={classes.appbar} position='static' color='primary'>
				<Link to='/'>
					<Button color='inherit'>Home</Button>
				</Link>

				<Link to='/users/'>
					<Button color='inherit'>Users</Button>
				</Link>

				<Link to='/items/'>
					<Button color='inherit'>Items</Button>
				</Link>

				<Link to='/login/'>
					<Button color='inherit'>Login</Button>
				</Link>

				<Link to='/add-item/'>
					<Button color='inherit'>Add Item</Button>
				</Link>
			</AppBar>
		</nav>
	)
}
export default withStyles(styles)(NavBar)
