import React from 'react'

import { Query } from 'react-apollo'
import { getBasicItemsQuery } from '../graphql-queries/queries'

import Navbar from './Navbar'
import BasicItem from './BasicItem';

const Items = () => {
  return (
    <div>
      <Query query={getBasicItemsQuery}>
        {({ loading, err, data }) => {
          if (loading) return <div>Loading</div>
          if (err) return <div>Error: {JSON.stringify(err)}</div>

          return (
            <div>
              <Navbar />
              <h1>Items</h1>
              <ul>
                
                {!loading && !err && data.getAllItems.map(item => (
                  <BasicItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          )
        }}
      </Query>
    </div>
  )
}

export default Items