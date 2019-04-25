import gql from 'graphql-tag'

const getBasicItemsQuery = gql`query{
  getAllItems{
    id
    item_owner_name
    item_name
    item_price
  }
}`

const myQuery=gql`query{
  getAllItems{
    id
    item_owner_id
    item_owner_name
    item_name
    item_type
    item_status
    item_price
    item_inventory
    item_description
    date_added
  }
  getAllUsers{
    id
    email
    user_status
    user_date_created
    fullname
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
  }
}`

export { myQuery, authenticationQuery, getBasicItemsQuery }