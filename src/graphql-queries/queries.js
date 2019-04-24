import gql from 'graphql-tag'

const myQuery=gql`query{
  getAllItems{
    id
    item_owner_id
    item_name
    item_type
    item_status
    item_price
    item_inventory
    date_added
  }
  getAllUsers{
    id
    email
    user_status
    user_date_created
    fullname
    username
  }
}`

const authenticationQuery= gql`
  query{
    getAllItems{
    id
    item_owner_id
    item_name
    item_type
    item_status
    item_price
    item_inventory
    date_added
  }
  getAllUsers{
    id
    email
    user_status
    user_date_created
    fullname
    username
  }
  }
`

export { myQuery, authenticationQuery }