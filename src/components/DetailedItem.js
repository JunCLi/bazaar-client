import React from 'react'

import { Query } from 'react-apollo'
import { getDetailedItem } from '../graphql-queries/queries'
import { Mutation } from 'react-apollo'
import { purchaseItemMutation } from '../graphql-queries/mutations'

import { Button } from '@material-ui/core'

import Navbar from './Navbar'

const DetailedItem = ({ match }) => {
  const { itemId } = match.params
  return (
    <div>
      <Navbar />
      <Query query={ getDetailedItem } variables={{item_id: itemId}}>
        {({loading, err, data}) => {
          if (loading) return <div>Loading...</div>
          if (err) return <div>Error: {JSON.stringify(err)}</div>
          return (
            <div>
              <h3>{data.getItem.item_name}</h3>
              <p>${data.getItem.item_price}</p>
              <p>sold by: {data.getItem.itemOwner.fullname}</p>
              <Mutation
                mutation={purchaseItemMutation}
                onError={(error)=> {
                  console.log('purchase item err:', error)
                }}
                onCompleted={response => {
                  console.log('response:', response)
                  if (response.purchaseItem.message === 'success') {
                    console.log('succesful transaction!')
                  }
                }}
              >
                {(purchaseItem) => (
                  <Button variant='contained' color='secondary' onClick={() => {
                    purchaseItem({ variables: { input: {
                      item_id: itemId,
                      purchase_quantity: 1
                    }}})
                  }}>Buy Item</Button>
                )}
              </Mutation>
            </div>
          )
        }}

      </Query>
    </div>
    
  )
}

export default DetailedItem