import React from 'react'

import { Query } from 'react-apollo'
import { getBasicItemsQuery } from '../graphql-queries/queries'

import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const HomeRecentItems = () => {
  return (
    <section className='recent-items container'>
      <h2>Recent items</h2>

      <Query query={ getBasicItemsQuery }>
        {({loading, err, data}) => {
          if (loading) return <div>Loading</div>
          if (err) return <div>Error: {JSON.stringify(err)}</div>

          const sortedItems = data.getAllItems.sort((a, b) => {
            return b.date_added - a.date_added
          })
          const mostRecentItems = sortedItems.slice(0, 4)

          return (
            <GridList cols={4} cellHeight={300}>
              {mostRecentItems.map(item => (
                <GridListTile key={item.id}>
                  <img src='https://via.placeholder.com/300/' alt='stuff'/>
                  <GridListTileBar
                    title={item.item_name}
                    subtitle={<div className='tile-subtitle'>
                        <span>${item.item_price}</span>
                        <span>By: {item.item_owner_name}</span>
                      </div>}
                  >
                  </GridListTileBar>
                </GridListTile>
              ))}
            </GridList>
          )
        }

        }
      </Query>
    </section>
  )
}

export default HomeRecentItems