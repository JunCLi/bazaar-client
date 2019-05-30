import React from 'react'

import { Link } from 'react-router-dom'

import { Query } from 'react-apollo'
import { getBasicItemsQuery } from '../graphql-queries/queries'

import { GridList, GridListTile, GridListTileBar } from '@material-ui/core'

import Navbar from './Navbar'
// import BasicItem from './BasicItem';

import '../css/items.css'

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
              <div className='container'>
                <GridList className='item-grid-box container' cols={4} cellHeight={300}>
                  {data.getAllItems.map(item => (
                    <GridListTile key={item.id}>
                      <Link to={`/item/${item.id}`}>
                        <img src='https://via.placeholder.com/300/' alt='stuff'/>
                        <GridListTileBar
                          title={item.item_name}
                          subtitle={<div className='tile-subtitle'>
                            <span>${item.item_price}</span>
                            <span>By: {item.itemOwner.fullname}</span>
                          </div>}
                        >
                        </GridListTileBar>
                      </Link>
                    </GridListTile>
                  ))}
                </GridList>
              </div>              
            </div>
          )
        }}
      </Query>
    </div>
  )
}

export default Items