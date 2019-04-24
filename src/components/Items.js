import React from 'react'

import { Query } from 'react-apollo'
import { myQuery } from '../graphql-queries/queries'

import Navbar from './Navbar'

const Items = () => {
  return (
    <div>
      <Query query={myQuery}>
        {({ loading, err, data }) => {
          if (loading) return <div>Loading</div>
          if (err) return <div>Error: {JSON.stringify(err)}</div>

          return (
            <div>
              <Navbar />
              <h1>Items</h1>
              <ul>
                {!loading && !err && data.getAllItems.map(item => {
                  return <li key={item.id}>{item.item_name}</li>
                })}
              </ul>
            </div>
          )
        }}
      </Query>
    </div>
  )
}

export default Items