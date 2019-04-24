import React from 'react'

import { Query } from 'react-apollo'
import { myQuery } from '../graphql-queries/queries'

import Navbar from './Navbar'

const Users = () => {
	return (
    <div>
      <Query query={myQuery}>
        {({ loading, err, data }) => {
          if (loading) return <div>Loading</div>
          if (err) return <div>Error: {JSON.stringify(err)}</div>

          return (
            <div>
              <Navbar />
              <h1>Users</h1>
              <ul>
                {!loading &&
                  !err &&
                  data.getAllUsers.map(user => {
                    return <li key={user.id}>{user.email}</li>
                  })}
              </ul>
            </div>
          )
        }}
      </Query>
    </div>
	)
}

export default Users
