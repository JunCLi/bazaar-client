import React from 'react'

import { Link } from 'react-router-dom'

import {withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

const styles = {
  appbar: {
    justifyContent: 'center',
    flexFlow: 'row nowrap',
  },
}

const NavBar = (props) => {
  const { classes } = props
	return (
		<nav>
			<AppBar className={classes.appbar} position='static' color='primary'>
        <Button color='inherit'>
          <Link to='/'>Home</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/users/'>Users</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/items/'>Items</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/login/'>Login</Link>
        </Button>
        <Button color='inherit'>
          <Link to='/placeholder/'>PlaceholderSignup</Link>
        </Button>
			</AppBar>
		</nav>
	)
}
export default withStyles(styles)(NavBar)