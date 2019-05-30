import gql from 'graphql-tag'

export const getLoggedUser = gql`
  query {
    getLoggedUser{
      id
      fullname
    }
  }
`

export const getBasicItemsQuery = gql`
  query{
    getAllItems{
      id
      item_name
      item_price
      date_added
      itemOwner {
        fullname
      }
    }
  }
`

export const getDetailedItem = gql`
  query itemVars($item_id: ID!){
    getItem(id: $item_id){
      id
      item_name
      item_type
      item_price
      item_inventory
      item_description
      date_added
      itemOwner {
        fullname
        user_date_created
        email
      }
    }
  }
`

export const getProfile = gql`
  query userVars($user_id: ID){ 
    getUser(id: $user_id){
      id
      email
      user_date_created
      fullname
      usersItems {
        item_name
        item_type
        item_status
        item_price
        item_inventory
        item_description
        date_added
      }
    }
  }
`


export const myQuery=gql`
  query{
    getAllItems{
      id
      item_owner_id
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
  }
`

export const authenticationQuery= gql`
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
  }
`
