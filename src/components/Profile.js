import React, { useState } from 'react'

import { Query } from 'react-apollo'
import { getProfile } from '../graphql-queries/queries'

import { Tabs, Tab } from '@material-ui/core'

import NavBar from './Navbar'
import AddItemForm from './AddItemForm'

const Profile = ({ match }) => {
  const [profileTab, setProfileTab] = useState(0)
	const { userId } = match.params

  const handleTabChange = (event, value) => {
    setProfileTab(value)
  }

	return (
		<div>
			<NavBar />
			<Query query={getProfile} variables={{ user_id: userId }}>
				{({ loading, err, data }) => {
					if (loading) return <div>Loading...</div>
					if (err) return <div>Error: {JSON.stringify(err)}</div>

					const { id, email, user_date_created, fullname } = data.getUser
					// const {item_name, item_type, item_status, item_price, item_inventory, item_description, date_added} = data.getUser.usersItems

					console.log(data.getUser.usersItems)

					const userDate = new Date(+user_date_created)
					const parsedUserDate = `${userDate.getFullYear()}-${userDate.getMonth()}-${userDate.getDay()}`

					// const itemDate = new Date(+date_added)
					// const parsedItemDate = `${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDay()}`

					return (
						<main>
              <Tabs
                value={profileTab}
                indicatorColor='secondary'
                variant='fullWidth'
                onChange={handleTabChange}
              >
                <Tab label='Information' className='profile-tab' />
                <Tab label='View Items' className='profile-tab' />
                <Tab label='Add Item' className='profile-tab' />
              </Tabs>

              {profileTab === 0 && <div>
								<h2>{fullname}</h2>
								<p>email: {email}</p>
								<p>Joined on: {parsedUserDate}</p>
							</div>}
							
              { profileTab === 1 && <div>
                <p>placeholder</p>
              </div>
              }

              {profileTab === 2 && <div className='add-item'>
								<AddItemForm userId={userId} />
							</div>
              }
						</main>
					)
				}}
			</Query>
		</div>
	)
}

export default Profile
